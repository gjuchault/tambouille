import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { get } from '../actions';

import View from '../components/Root';

class Root extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    props.dispatch(get());
  }

  render() {
    return <View />;
  }
}

export default connect()(Root);
