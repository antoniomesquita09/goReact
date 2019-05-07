import { all, takeLatest } from 'redux-saga/effects';

import { addLocal } from './location';
import { addUser } from './user';
import { Types as LocationTypes } from '../ducks/location';
import { Types as UserTypes } from '../ducks/user';

export default function* rootSaga() {
  yield all([takeLatest(UserTypes.ADD_USER_REQUEST, addUser)]);
  yield all([takeLatest(LocationTypes.ADD_GEOLOCAL_REQUEST, addLocal)]);
}
