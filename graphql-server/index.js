import { ApolloServer, UserInputError, gql } from 'apollo-server';
import { v1 as uuid } from 'uuid';
import axios from 'axios';

const persons = [
  {
    name: 'Anna',
    phone: '123456780',
    street: 'Street 1 ',
    city: 'Valencia',
    id: 'ASDFGHSXDCFVGASDFdfgsdf§1234'
  },
  {
    name: 'Antonio',
    phone:"9999",
    street: 'Street 2 ',
    city: 'Barcelona',
    id: 'gcfvhbjnkml45678ibSS'
  },
  {
    name: 'Juan',
    street: 'Street 4 ',
    city: 'Madrid',
    id: 'Aghjbknl888gsdf§1234'
  },
];

// Data description
const typeDefs = gql`
  enum YesNo {
    YES
    NO
  }

  type Address {
    street: String!
    city: String!
  }

  type Person {
    name: String! 
    phone: String 
    address: Address!
    id: ID! 
  }

  type Query {
    personCount: Int!
    allPersons(phone: YesNo): [Person]!
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person
    editNumber(
      name: String!
      phone: String!
    ): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: async (root, args) => {
      //** Target RestAPI */
      // const {data: personsFromAPI} = await axios.get('http://localhost:3000/persons')
      //if (!args.phone) return personsFromAPI;
      if (!args.phone) return persons;

      return persons.filter(person =>
        args.phone === "YES" ? person.phone : !person.phone)
    },
    findPerson: (root, args) => {
      const { name } = args;
      return persons.find(person => person.name === name);
    }
  },
  Person: {
    address: (root) => {
      return {
        street: root.street,
        city: root.city
      }
    }
  },
  Mutation: {
    addPerson: (root, args) => {
      if (persons.find(p => p.name === args.name)) {
        throw new UserInputError('Name must be unique',
          { invalidArgs: args.name })
      }
      const person = { ...args, id: uuid() }
      persons.push(person); // update database with new person 
      return person;
    },
    editNumber:(root, args) => {
      const personIndex = persons.findIndex(p => p.name === args.name)
      if (personIndex === -1) return null
      const person = persons[personIndex]
      const updatePerson = {...person, phone: args.phone}
      persons[personIndex] = updatePerson;
      return updatePerson

    }
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}}`);
})

