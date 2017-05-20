import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from './Input';
import Select from './Select';

import css from './Form.scss';

const Form = ({ handleSubmit, submitting }) => {
  const required = val => (val ? undefined : 'Cette information est requise.');

  const group = ['', 'LR', 'LREM', 'MODEM', 'PS'];

  return (
    <form className={css.module} onSubmit={handleSubmit}>
      <h2>Département</h2>
      <Field
        label="N°"
        name="dep_num"
        component={Input}
        type="number"
        validate={required}
      />
      <Field
        label="Libellé"
        name="dep_name"
        component={Input}
        validate={required}
      />
      <h2>Circonsciption</h2>
      <Field
        label="N°"
        name="circo"
        component={Input}
        type="number"
        validate={required}
      />
      <h2>Candidat.e désigné.e</h2>
      <Field
        label="Nom"
        name="candidat_name"
        component={Input}
        validate={required}
      />
      <Field
        label="Genre"
        name="candidat_gender"
        component={Select}
        options={['', 'H', 'F']}
        validate={required}
      />
      <Field
        label="Groupe"
        name="candidat_group"
        component={Select}
        options={group}
        validate={required}
      />
      <button disabled={submitting} type="submit">{(submitting) ? 'En cours' : 'Ajouter'}</button>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({ form: 'form' })(Form);
