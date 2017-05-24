import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import 'normalize.css';
import './Root.scss';

import Home from '../containers/Home';
import Item from '../containers/Item';

const Root = () => (
  <Router>
    <div>
      <h1><Link to="/">Tambouille</Link></h1>

      <Route exact path="/" component={Home} />
      <Route path="/item/:id" component={Item} />
    </div>
  </Router>
);

export default Root;
