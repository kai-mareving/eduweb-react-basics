import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = props => (
  <ul className={styles.wrapper}>
    {props.items.map((item, index) => (
      <ListItem key={index} {...item} />
      //or <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.node,
};

export default List;
