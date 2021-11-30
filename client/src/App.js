import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useState } from 'react';

import Home from './pages/Home';
import Nav from './components/Nav';
import Menu from './components/Menu';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='app'>
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className='pages'>
          <Switch>
              <Route exact path="/" component={Home} />
          </Switch>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
