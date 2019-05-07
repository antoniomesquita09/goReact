import { put } from 'redux-saga/effects';

import { Creators as LocationActions } from '../ducks/location';

export function* addLocal(action) {
  try {
    const local = {
      lat: action.payload.local.lat,
      long: action.payload.local.long,
    };

    yield put(LocationActions.addGeolocalSuccess(local));
  } catch (err) {
    yield put(LocationActions.addGeolocalFailure('Erro ao adicionar repositorio'));
  }
}
