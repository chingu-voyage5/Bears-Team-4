import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { CookiesProvider } from 'react-cookie';

//REDUX
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}><CookiesProvider><Home/></CookiesProvider></Provider>, document.getElementById('root'));
registerServiceWorker();
