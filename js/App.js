import React from 'react'
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home';
import A from './components/A';

const SliderComponent = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/a" component={A}/>
    </Switch>
)

ReactDOM.render((
    <HashRouter>
        <SliderComponent />
    </HashRouter>
), document.getElementById('root'));