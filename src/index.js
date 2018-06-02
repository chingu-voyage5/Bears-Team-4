import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

//REDUX
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(<Provider store={store}><Home/></Provider>, document.getElementById('root'));
registerServiceWorker();
