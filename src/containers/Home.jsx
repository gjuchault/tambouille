import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { add } from '../actions';
import { getAll } from '../reducers';

import View from '../components/Home';

const Home = ({ dispatch, items }) =>
  <View add={data => dispatch(add(data))} items={items} />;

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  items: getAll(state),
});

export default connect(mapStateToProps)(Home);
