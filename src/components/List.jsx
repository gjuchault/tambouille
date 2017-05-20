import PropTypes from 'prop-types';
import React from 'react';

import css from './List.scss';

const List = ({ items }) => (
  <table className={css.module}>
    <thead>
      <tr>
        <th colSpan="2">Département</th>
        <th rowSpan="2">Circo</th>
        <th colSpan="3">Candidat.e désigné.e</th>
      </tr>
      <tr>
        <th>Num</th>
        <th>Libellé</th>
        <th>Nom</th>
        <th>Genre</th>
        <th>Groupe</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.dep_num}</td>
          <td>{item.dep_name}</td>
          <td>{item.circo}</td>
          <td>{item.candidat_name}</td>
          <td>{item.candidat_gender}</td>
          <td>{item.candidat_group}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
