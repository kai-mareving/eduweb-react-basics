import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import styles from './List.module.scss';

const List = ({items}) => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map((item, index) => (
          <ListItem key={index} {...item} />
          //or <ListItem key={item.title} {...item} />
        ))}
      </ul>
    ) : (
        <h1 className={styles.noItems}>There's nothing here yet. Please add some items!?</h1>
    )}
  </>
);

List.propTypes = {
  items: PropTypes.array,
};

export default List;
