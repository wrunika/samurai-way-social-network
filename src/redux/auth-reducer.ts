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
        case "auth/SET-USER-DATA":
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
        type: "auth/SET-USER-DATA",
        payload
    } as const
}

export const getAuthUserData = () => async (dispatch: AppThunkDispatch) => {
    //return authAPI.me()
    const data = await authAPI.me()

    //data.resultCode === 0 && dispatch(setAuthUserData(data.data));
    data.resultCode === 0 && dispatch(setAuthUserData({...data.data, isAuth: true}));

}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppThunkDispatch) => {
    const  data = await authAPI.login(email, password, rememberMe)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logout = () => async (dispatch: AppThunkDispatch) => {
    const data = await authAPI.logout()

    data.resultCode === 0 && dispatch(setAuthUserData({...data.data, id: null, login: null, email: null,  isAuth: false}));

}