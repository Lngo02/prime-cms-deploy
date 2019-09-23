import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Home from './Home';
import About from './About';
import Goals from './Goals';
import * as serviceWorker from './serviceWorker';
// Import for apollo graph ql
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Set up link to cms
const client = new ApolloClient({
    uri: 'https://prime-cms-linda.herokuapp.com/graphql'
})

const App = () => (
    <ApolloProvider client={client}>
        <Router basename="/prime-cms-deploy">
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Goals" component={Goals} />
        </Router>
    </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
