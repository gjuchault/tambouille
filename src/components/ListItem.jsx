import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import css from './List.scss';

const ListItem = ({ item, remove }) => (
  <tr>
    <td>{item.dep_num}</td>
    <td>{item.dep_name}</td>
    <td>{item.circo}</td>
    <td>{item.candidat_name}</td>
    <td>{item.candidat_group}</td>
    <td>{item.category}</td>
    <td>
      <a rel="noreferrer noopener" target="_blank" href={item.source}>Lien</a>
    </td>
    <td>{item.description}</td>
    <td className={css.actions}>
      <Link to={`/item/${item.id}`}>Editer</Link>
      <button onClick={remove}>Supprimer</button>
    </td>
  </tr>
);

ListItem.propTypes = {
  item: PropTypes.shape({}).isRequired,
  remove: PropTypes.func.isRequired,
};

export default ListItem;
