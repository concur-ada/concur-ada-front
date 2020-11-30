import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Profile from './Profile';
import Login from './Login';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route path='/home'>
                    <Home/>
                </Route>
                <Route path='/profile'>
                    <Profile/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Redirect from='/' to='/home'/>
            </Switch>
            <Footer/>
        </div>
    </Router>
);

export default App;
