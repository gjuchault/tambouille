import PropTypes from 'prop-types';
import React from 'react';

const Input = ({ input, label, meta: { invalid, touched }, type }) => (
  <fieldset className={(invalid && touched) ? 'error' : false}>
    <label htmlFor={input.name}>{label}</label>
    <input {...input} id={input.name} type={type} />
  </fieldset>
);

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    invalid: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
  type: PropTypes.string,
};

export default Input;
