import {combineReducers, createStore} from "redux";
import {addPostActionCreator, profileReducer, setUserProfile, updateNewPostTextActionCreator} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {
    followUser,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollowUser,
    usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followUser>
    | ReturnType<typeof unfollowUser>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>

//export type RootStoreType = any
export type RootStoreType = ReturnType<typeof createStore>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store: RootStoreType = createStore(rootReducer);
console.log(store.getState())

//@ts-ignore
window.store = store;