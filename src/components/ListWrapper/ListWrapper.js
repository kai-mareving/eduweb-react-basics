import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

const ListWrapper = (props) => (
  <ul className='ListWrapper__wrapper'>
    {props.items.map((item, index) => (
      <ListItem key={index} {...item} />
    //or <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

export default ListWrapper;
