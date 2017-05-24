import PropTypes from 'prop-types';
import React from 'react';

import Form from './Form';
import List from './List';

const Home = ({ add, items }) => (
  <div>
    <Form onSubmit={add} />
    <List items={items} />
  </div>
);

Home.propTypes = {
  add: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
