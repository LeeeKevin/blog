import React from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Home from './components/Home';
import A from './components/A';


ReactDOM.render(
    <Router>
        <Route path='/' component={Home}>
            <Route path='a' component={A}>123</Route>
        </Route>
    </Router>,
    document.getElementById('root')
)