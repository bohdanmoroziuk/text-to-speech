import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from 'App';

import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'index.css';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();
