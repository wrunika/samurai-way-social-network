import {ActionsTypes, AppThunkDispatch} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


export type AuthDataType = {
    id: number | null
    login: string
    email: string
}
export type AuthType = {
    isAuth: boolean
} & AuthDataType


let initialState = {
    id: null,
    login: '',
    email: '',
    isAuth: false
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
                //isAuth: true
            };
        default:
            return state;
    }
}

export const setAuthUserData = (payload: AuthType) => {
    return {
        type: "SET-USER-DATA",
        payload
    } as const
}

export const getAuthUserData = () => (dispatch: AppThunkDispatch) => {
    return authAPI.me()
        .then(data => {
            //data.resultCode === 0 && dispatch(setAuthUserData(data.data));
            data.resultCode === 0 && dispatch(setAuthUserData({...data.data, isAuth: true}));
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: AppThunkDispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch: AppThunkDispatch) => {
    authAPI.logout()
        .then(data => {
            data.resultCode === 0 && dispatch(setAuthUserData({...data.data, id: null, login: null, email: null,  isAuth: false}));
        })
}