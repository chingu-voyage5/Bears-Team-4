import {combineReducers} from 'redux';

import auth from './auth';
import map from './map';

export default combineReducers({
    auth,map
});