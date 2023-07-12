import {AppThunkDispatch} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

type AppDataType = {
    isInitialized: boolean
}

type ActionType = ReturnType<typeof setIsInitialized>

const initialState = {
    isInitialized: false
}

export const appReducer = (state: AppDataType = initialState, action: ActionType): AppDataType => {
  switch (action.type) {
      case "auth/SET-IS-INITIALIZED":
          return {...state, isInitialized: true}
      default:
          return state;
  }
}

export const setIsInitialized = () => {
  return {
      type: 'auth/SET-IS-INITIALIZED'
  } as const
}

export const initializeApp = () => (dispatch: AppThunkDispatch) => {
  dispatch(getAuthUserData())
      .then(() => {
          dispatch(setIsInitialized())
      })
}