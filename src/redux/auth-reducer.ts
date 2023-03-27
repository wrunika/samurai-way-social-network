import {ActionsTypes} from "./redux-store";


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
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export const setAuthUserData = (data: AuthDataType) => {
    return {
        type: "SET-USER-DATA",
        data
    } as const
}