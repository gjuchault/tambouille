import PropTypes from 'prop-types';
import React from 'react';

const Select = ({ input, label, meta: { invalid, touched }, options }) => (
  <fieldset className={(invalid && touched) ? 'error' : false}>
    <label htmlFor={input.name}>{label}</label>
    <select {...input} id={input.name}>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </fieldset>
);

Select.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    invalid: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
