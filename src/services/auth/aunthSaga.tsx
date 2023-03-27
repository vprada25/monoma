import { put, takeLatest, all } from 'redux-saga/effects'

import { loginPending, loginSuccess, loginFailed } from './authSlice'

import { DATA_USERS } from '../../helpers/dummy/users'
import { loginAction } from './type'
import { message } from 'antd'

function* fakeLogin({ payload }: loginAction) {
    const validUser = DATA_USERS.find(
        e => e.email === payload.email && e.password === payload.password
    )

    if (validUser) {
        message.success('Inicio de sesión exitoso')
        yield put(loginSuccess({ token: validUser.token, user: validUser.user }))
    } else {
        message.error('No existe ese usuario, en nuestra base de datos')
        yield put(
            loginFailed({ error: 'No existe ese usuario, en nuestra base de datos' })
        )
    }
}

function* ActionWatcher() {
    yield takeLatest(loginPending, fakeLogin)
}

export default function* AuthSaga() {
    yield all([ActionWatcher()])
}
