import PropTypes from 'prop-types';
import React from 'react';

const Textarea = ({ input, label, meta: { invalid, touched } }) => (
  <fieldset className={`Textarea${(invalid && touched) ? ' error' : ''}`}>
    <label htmlFor={input.name}>{label}</label>
    <textarea {...input} id={input.name} />
  </fieldset>
);

Textarea.defaultProps = {
  type: 'text',
};

Textarea.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    invalid: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Textarea;
