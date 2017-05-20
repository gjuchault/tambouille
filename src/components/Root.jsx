import PropTypes from 'prop-types';
import React from 'react';

import 'normalize.css';
import './Root.scss';

import Form from './Form';

const Root = ({ add }) => (
  <div>
    <h1>Tambouille</h1>
    <Form onSubmit={add} />
  </div>
);

Root.propTypes = {
  add: PropTypes.func.isRequired,
};

export default Root;
