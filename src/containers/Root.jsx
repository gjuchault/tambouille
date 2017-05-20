import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

import View from '../components/Root';

class Root extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    console.log('truc à fetch');
  }

  render() {
    return <View add={this.props.add} />;
  }
}

export default connect(null, actions)(Root);
