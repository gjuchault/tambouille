import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { remove } from '../actions';

import View from '../components/ListItem';

const ListItem = ({ dispatch, item }) =>
  <View item={item} remove={() => dispatch(remove(item.id))} />;

ListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  item: PropTypes.shape({}).isRequired,
};

export default connect()(ListItem);
