import { ApolloServer, gql } from 'apollo-server';

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
    phone: '100056780',
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
    allPersons: [Person]!
    findPerson(name: String!): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
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
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}}`);
})

