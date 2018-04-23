import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from '../components/About';
import Home from '../components/Home/Home';
import Topics from '../components/Topics';

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

export default BasicExample;