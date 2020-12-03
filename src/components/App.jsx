import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../store/store';
import Header from './Header';
import Home from './Home';
import DemoCounter from './DemoCounter';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path='/home'>
                        <Home/>
                    </Route>
                    <Route path='/demoCounter'>
                        <DemoCounter/>
                    </Route>
                    <Redirect from='/' to='/home'/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    </Provider>
);

export default App;