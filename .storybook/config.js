import { addParameters, configure, addDecorator } from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {withKnobs} from '@storybook/addon-knobs';
import '../client/main.css'

import  '../.meteor/local/build/programs/web.browser/merged-stylesheets.css'

// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

// automatically import all files ending in *.stories.js


// addDecorator(withInfo({
//     inline: true
//   }));
  
  addDecorator(withKnobs);


configure(require.context('../stories', true, /\.stories\.js$/), module);
