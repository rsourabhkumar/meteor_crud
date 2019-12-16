import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import './main.html'

// add render routes function
import { renderRoutes } from '../imports/startup/client/routes'

// render routes after DOM has loaded
Meteor.startup(() => {
  render(renderRoutes(), document.querySelector('.render-target'));
});
