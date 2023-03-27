import { combineReducers, AnyAction } from '@reduxjs/toolkit'
import LoginReducer, {
    KEY_AUTH,
    logout,
    initialState,
} from '../services/auth/authSlice'

const rootAppReducers = combineReducers({ [KEY_AUTH]: LoginReducer })

const rootReducer = (state: any, action: AnyAction) => {
    if (action.type === 'AUTH/LOGOUT' || action.type === logout()) {
        state = { [KEY_AUTH]: initialState }
    }
    return rootAppReducers(state, action)
}

export type RootState = ReturnType<typeof rootAppReducers>

export default rootReducer
