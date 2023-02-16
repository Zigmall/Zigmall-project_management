import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Clients from './components/Clients';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import AddClientModel from './components/AddClientModel';
import Projects from './components/Projects';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="container">
            <AddClientModel />
            <Projects />
            <Clients />
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
