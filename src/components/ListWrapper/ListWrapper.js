import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';

 const ListWrapper = () => (
  <ul className='ListWrapper__wrapper'>
     {twitterAccounts.map((item, index) => (
       <ListItem key={index} {...item} />
      //or <ListItem key={item.name} {...item} />
     ))}
  </ul>
);

export default ListWrapper;
