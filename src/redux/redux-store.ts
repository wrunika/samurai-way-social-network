import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type RootStoreType = ReturnType<typeof createStore>

export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

export const store: RootStoreType = createStore(reducers);
console.log(store)