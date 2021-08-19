import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css";

import danAbramovImage from '../../assets/images/danabramov.jpg';
import ryanFlorenceImage from '../../assets/images/ryanflorence.jpg';
import michaelJacksonImage from '../../assets/images/michaeljackson.jpg';
import kentCDoddsImage from '../../assets/images/kentcdodds.jpg';

import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import TwittersView from '../TwittersView/TwittersView';
import Navigation from '../../components/Navigation/Navigation';

const initialStateItems = [
  {
    image: danAbramovImage,
    name: "Dan Abramov",
    description: "React core member",
    twitterLink: "https://twitter.com/dan_abramov"
  },
  {
      image: ryanFlorenceImage,
      name: 'Ryan Florence',
      description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
      twitterLink: 'https://twitter.com/ryanflorence',
  },
  {
      image: michaelJacksonImage,
      name: 'Michael Jackson',
      description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
      twitterLink: 'https://twitter.com/mjackson',
  },
  {
      image: kentCDoddsImage,
      name: 'Kent C. Dodds',
      description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
      twitterLink: 'https://twitter.com/kentcdodds',
  },
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset(); /* reset input values from form after submit */
  };

  render() {
    return (
      <BrowserRouter>
        <>
          <Navigation />
          <h1>Hello World</h1>
          <Switch>
            <Route exact path="/" component={ TwittersView }/>
            <Route path="/articles" component={ ArticlesView } />
            <Route path="/notes" component={NotesView} />
            <Route path="/notes/:id" component={NotesView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
