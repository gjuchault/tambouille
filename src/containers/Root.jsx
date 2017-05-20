import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { getAll } from '../reducers';

import View from '../components/Root';

class Root extends Component {
  static propTypes = {
    add: PropTypes.func.isRequired,
    get: PropTypes.func.isRequired,
    tambouilles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props);

    if (!props.tambouilles.length) {
      this.props.get();
    }
  }

  render() {
    return <View add={this.props.add} tambouilles={this.props.tambouilles} />;
  }
}

const mapStateToProps = state => ({
  tambouilles: getAll(state),
});

export default connect(mapStateToProps, actions)(Root);
