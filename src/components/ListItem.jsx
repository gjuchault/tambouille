import PropTypes from 'prop-types';
import React from 'react';

const ListItem = ({ item, remove }) => (
  <tr>
    <td>{item.dep_num}</td>
    <td>{item.dep_name}</td>
    <td>{item.circo}</td>
    <td>{item.candidat_name}</td>
    <td>{item.candidat_group}</td>
    <td>{item.category}</td>
    <td>{item.source}</td>
    <td>{item.description}</td>
    <td>
      <button onClick={remove}>Supprimer</button>
    </td>
  </tr>
);

ListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  remove: PropTypes.func.isRequired,
};

export default ListItem;
