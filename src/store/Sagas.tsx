import { fork, all } from 'redux-saga/effects'

import loginSaga from '../services/auth/aunthSaga';

export default function* rootSaga() {
  yield all([fork(loginSaga)])
}