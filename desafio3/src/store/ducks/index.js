import { combineReducers } from 'redux';

import User from './user';
import geoLocal from './location';

export default combineReducers({
  User,
  geoLocal,
});
