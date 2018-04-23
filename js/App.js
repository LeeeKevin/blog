import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import BasicExample from './containers/BasicExample';

ReactDOM.render((
    <BasicExample />
), document.getElementById('root'));