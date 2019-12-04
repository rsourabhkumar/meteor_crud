import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import App from './components/app'
import './main.html'

Meteor.startup(() => {
    ReactDOM.render(<App/>, document.querySelector('.render-target'));
  });
