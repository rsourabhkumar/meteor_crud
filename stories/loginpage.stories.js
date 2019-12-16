import React from 'react';
import { storiesOf } from '@storybook/react';
import LoginPage from '../imports/ui/pages/LoginPage';
import { action } from '@storybook/addon-actions';

storiesOf('Components', module)
  .add('LoginPage Component', () => (
    <LoginPage onSubmit={action("onSubmit called")}/>
  ))
 

