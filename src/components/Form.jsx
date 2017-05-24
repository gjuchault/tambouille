import PropTypes from 'prop-types';
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

import css from './Form.scss';

const Form = ({ edit, handleSubmit, submitting }) => {
  const required = val => (val ? undefined : 'Cette information est requise.');
  const url = value => (
    value && !/^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(value)
    ? 'Invalid email address'
    : undefined);

  const group = ['', 'LR', 'UDI', 'LREM', 'MODEM', 'PS', 'PRG', 'EELV'];
  const categories = ['', '1', '2', '3', '4', '5', '6', '7'];

  let buttonLabel = 'Ajouter';
  if (submitting) {
    buttonLabel = 'En cours';
  } else if (edit) {
    buttonLabel = 'Éditer';
  }

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
      <Field
        label="Circonsciption"
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
        label="Groupe"
        name="candidat_group"
        component={Select}
        options={group}
        validate={required}
      />
      <h2>Tambouille</h2>
      <Field
        label="Catégorie"
        name="category"
        component={Select}
        options={categories}
        validate={required}
      />
      <Field
        label="Source"
        name="source"
        component={Input}
        validate={[required, url]}
      />
      <Field
        label="Description"
        name="description"
        component={Textarea}
        validate={required}
      />
      <button disabled={submitting} type="submit">{buttonLabel}</button>
    </form>
  );
};

Form.defaultProps = {
  edit: false,
};

Form.propTypes = {
  edit: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({ form: 'form' })(Form);
