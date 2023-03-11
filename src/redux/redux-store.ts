import {combineReducers, createStore} from "redux";
import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {followAC, setUsersAC, unfollowAC, usersReducer} from "./users-reducer";


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
//export type RootStoreType = any
export type RootStoreType = ReturnType<typeof createStore>

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store: RootStoreType = createStore(rootReducer);
console.log(store.getState())