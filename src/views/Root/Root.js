import React from 'react';
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';

class Root extends React.Component {
  state = {
    twitter: [],
    article: [],
    note: [],
    isModalOpen: false,
    // name: 'Jo Kai Mareving',
  };

  addItem = (e, newItem)=> {
    e.preventDefault();

    console.log('newItem:', newItem);

    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));

    e.target.reset(); /* reset input values from form after submit */
    this.closeModal();
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={ TwittersView }/>
            <Route path="/articles" component={ ArticlesView } />
            <Route path="/notes" component={NotesView} />
            <Route path="/notes/:id" component={NotesView} />
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          {/* {isModalOpen ? <Modal closeModalFn={this.closeModal}/> : null } */}
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;