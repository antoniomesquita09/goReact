import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/user';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const userData = {
      id: data.id,
      user: data.login,
      avatar: data.avatar_url,
    };

    yield put(UserActions.addUserSuccess(userData));
  } catch (err) {
    yield put(UserActions.addUserFailure('Erro ao adicionar usuario'));
  }
}
