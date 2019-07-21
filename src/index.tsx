import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import store from 're-ducks/store';

import App from 'App';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'index.css';

render(
  <Provider {...{store}}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
