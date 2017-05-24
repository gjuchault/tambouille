import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

import { update } from '../actions';
import { getItem } from '../reducers';

import Form from '../components/Form';

class Item extends Component {
  static defaultProps = {
    item: undefined,
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    item: PropTypes.shape({}),
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item && !isEqual(this.props.item, nextProps.item)) {
      this.props.history.push('/');
    }
  }

  render() {
    if (this.props.item) {
      return (
        <Form
          initialValues={this.props.item}
          onSubmit={data => this.props.dispatch(update(data))}
          edit
        />
      );
    }

    return <div>Chargement</div>;
  }
}

const mapStateToProps = (state, { match }) => ({
  item: getItem(state, match.params.id),
});

export default connect(mapStateToProps)(Item);
