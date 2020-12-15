import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import NameBadgeDisplay from './NameBadgeDisplay';

import store from '../store/store';
import Header from './Header';
import Home from './Home';
import Landing from './Landing';
import DemoCounter from './DemoCounter';
import Footer from './Footer';
import People from './People';
import Configure from './Configure';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Invite from './invite';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <NameBadgeDisplay />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/invite">
            <Invite />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/demoCounter">
            <DemoCounter />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/configure">
            <Configure />
          </Route>
          <Redirect from="/" to="/landing" />
        </Switch>
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
