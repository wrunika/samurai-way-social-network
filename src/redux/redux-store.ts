import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    addPostActionCreator, deletePost,
    profileReducer, savePhotoSuccess,
    setUserProfile,
    setUserStatus
} from "./profile-reducer";
import {dialogsReducer, sendMessageAC} from "./dialogs-reducer";
import {
    followUser,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollowUser,
    usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as FormReducer } from 'redux-form';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {appReducer, setIsInitialized} from "./app-reducer";


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followUser>
    | ReturnType<typeof unfollowUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setIsInitialized>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

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