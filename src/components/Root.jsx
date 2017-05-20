import PropTypes from 'prop-types';
import React from 'react';

import 'normalize.css';
import './Root.scss';

import Form from './Form';
import List from './List';

const Root = ({ add, tambouilles }) => (
  <div>
    <h1>Tambouille</h1>
    <Form onSubmit={add} />
    <List items={tambouilles} />
  </div>
);

Root.propTypes = {
  add: PropTypes.func.isRequired,
  tambouilles: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Root;
