import React, { useState, useContext, createContext } from 'react';
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { split } from "apollo-link";
import { Switch, Route } from 'react-router-dom';

import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastContainer } from 'react-toastify';
// import components
import Nav from './components/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';

import { setContext } from 'apollo-link-context';
import { getMainDefinition } from 'apollo-utilities';

import absintheSocketLink from "./absinthe-socket-link"


const  App = () => {
  // 2. create http link
  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
  });

  // 5. use split to split http link or websocket link
  const link = split(
    ({ query }) => {
        // split link based on operation type
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    absintheSocketLink,
    httpLink
  );
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
  });
  return (
    <ApolloProvider client={client}>
      <Nav />
      <ToastContainer />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
      </Switch>
    </ApolloProvider>
  );
}

export default App;
