import React from 'react';
import AppContext from '../../context';
import List from '../../components/List/List';

const ArticlesView = () => (
  <AppContext.Consumer>
    {(context) => (
      <List items={ context.article }/>
      // <p>This is articles view for {context.name}</p>
    )}
  </AppContext.Consumer>
);

export default ArticlesView;