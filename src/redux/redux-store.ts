import {applyMiddleware, combineReducers, createStore} from "redux";
import { profileReducer } from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as FormReducer } from 'redux-form';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {appReducer} from "./app-reducer";


//export type RootStoreType = any
export type RootStoreType = ReturnType<typeof createStore>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: FormReducer
});

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>

export const store: RootStoreType = createStore(rootReducer, applyMiddleware(thunkMiddleware));
console.log(store.getState())

//@ts-ignore
window.store = store;