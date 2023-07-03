import {ActionsTypes, AppThunkDispatch} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

type AppDataType = {
    isInitialized: boolean
}

const initialState = {
    isInitialized: false
}

export const appReducer = (state: AppDataType = initialState, action: ActionsTypes): AppDataType => {
  switch (action.type) {
      case "SET-IS-INITIALIZED":
          return {...state, isInitialized: true}
      default:
          return state;
  }
}

export const setIsInitialized = () => {
  return {
      type: 'SET-IS-INITIALIZED'
  } as const
}

export const initializeApp = () => (dispatch: AppThunkDispatch) => {
  dispatch(getAuthUserData())
      .then(() => {
          dispatch(setIsInitialized())
      })
}