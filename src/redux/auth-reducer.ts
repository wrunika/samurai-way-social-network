import {AppThunkDispatch} from "./redux-store";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


export type AuthDataType = {
    id: number | null
    login: string
    email: string
}
export type AuthType = {
    isAuth: boolean
    url: string
} & AuthDataType

type ActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrl>

let initialState = {
    id: null,
    login: '',
    email: '',
    isAuth: false,
    url: ''
}

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case "auth/SET-USER-DATA":
            return {
                ...state,
                ...action.payload,
                //isAuth: true
            };

        case "auth/GET-CAPTCHA-URL":
            return {
                ...state,
                url: action.payload
            }
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

export const getCaptchaUrl = (payload: string) => {
    return {
        type: "auth/GET-CAPTCHA-URL",
        payload
    } as const
}

export const getAuthUserData = () => async (dispatch: AppThunkDispatch) => {
    //return authAPI.me()
    const data = await authAPI.me()
    console.log(data)
    debugger
    //data.resultCode === 0 && dispatch(setAuthUserData(data.data));
    data.resultCode === 0 && dispatch(setAuthUserData({...data.data, isAuth: true}));

}

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl: string) => async (dispatch: AppThunkDispatch) => {
    const  data = await authAPI.login(email, password, rememberMe, captchaUrl)

    if (data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        if (data.resultCode === 10) {
            dispatch(setCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}))
    }

}

export const logout = () => async (dispatch: AppThunkDispatch) => {
    const data = await authAPI.logout()

    data.resultCode === 0 && dispatch(setAuthUserData({...data.data, id: null, login: null, email: null,  isAuth: false}));

}

export const setCaptchaUrl = () => async (dispatch: AppThunkDispatch) => {
    const data = await securityAPI.getCaptchaUrl()
    dispatch(getCaptchaUrl(data.url))
}

/*
type CaptchaUrlType = {
    url: string
}*/
