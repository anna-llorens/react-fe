import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "@symphony-ui/uitoolkit-styles/dist/css/uitoolkit.css";
import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: "http://localhost:4000/"
});

const client = new ApolloClient({
  link:httpLink,
  cache: new InMemoryCache(),
});

const query = gql`
  query  {
    allPersons {
      name
      id
      phone
    }
  }
`
client.query({query}).then(res => console.log(res.data));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
