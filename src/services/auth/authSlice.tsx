import { createSlice } from '@reduxjs/toolkit'

import { loginFailedType, loginSuccessType, loginAction } from './type'

export const initialState = {
    message: '',
    token: '',
    user: '',
    authentication: false,
    error: false,
    success: false,
    loading: false,
}

export const KEY_AUTH = 'AUTH'

const AuthSlice = createSlice({
    name: KEY_AUTH,
    initialState,
    reducers: {
        loginPending: (state, action: loginAction) => ({ ...state, loading: true }),
        loginSuccess: (state, action: loginSuccessType) => ({
            ...state,
            loading: false,
            success: true,
            authentication: true,
            token: action.payload.token,
            user: action.payload.user,
            message: ' ',
            storage: localStorage.setItem('token', action.payload.token),
        }),
        loginFailed: (state, action: loginFailedType) => ({
            ...state,
            loading: false,
            error: true,
            message: action.payload.error,
        }),
        logout: state => ({
            ...state,
            authentication: false,
            error: false,
            success: false,
            loading: false,
            token: '',
            message: '',
            username: '',
            storage: localStorage.removeItem('token'),
        }),
    },
})

export const { loginPending, loginFailed, loginSuccess, logout } = AuthSlice.actions

export default AuthSlice.reducer
