import {combineReducers} from 'redux';

import auth from './auth';
import itinerary from './itinerary';
import map from './map';

export default combineReducers({
    auth,itinerary,map
});