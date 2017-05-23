import PropTypes from 'prop-types';
import React from 'react';

import ListItem from '../containers/ListItem';
import css from './List.scss';

const List = ({ items }) => (
  <table className={css.module}>
    <thead>
      <tr>
        <th colSpan="3">Département</th>
        <th colSpan="2">Candidat.e désigné.e</th>
        <th colSpan="3">Tambouille</th>
        <th rowSpan="2">Actions</th>
      </tr>
      <tr>
        <th>Num</th>
        <th>Libellé</th>
        <th>Circon</th>
        <th>Nom</th>
        <th>Groupe</th>
        <th>Cat</th>
        <th>Source</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => <ListItem key={item.id} item={item} />)}
    </tbody>
  </table>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
