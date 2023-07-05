import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";


export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: PostDataType[]
    //newPostText: string
    profile: ProfileType
    status: string
}
export type ProfileType = {
    aboutMe?: string
    contacts?: {}
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId?: number
    photos?: {
        small: string
        large: string
    }
}

let initialState = {
    postsData: [
        {id: "1", message: "It is my first post.", likesCount: 5},
        {id: "2", message: "Hi, how have you been?", likesCount: 3},
        {id: "3", message: "The weather is nice today!", likesCount: 1},
    ],
    //newPostText: 'it-incubator',
    profile: {},
    status: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "profile/ADD-POST":
            const stateCopy = {...state};
            let newId = (+stateCopy.postsData[stateCopy.postsData.length-1].id+1).toString();
            const newPost: PostDataType = {id: newId, message: action.newPost, likesCount: 0};
            stateCopy.postsData = [newPost, ...stateCopy.postsData];
            //stateCopy.newPostText = '';
            return stateCopy;
       /* case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText};*/
        case "profile/SET-USER-PROFILE":
            return {...state, profile: action.profile};
        case "profile/SET-USER-STATUS":
            return {...state, status: action.status}
        case "profile/DELETE-POST":
            return {...state, postsData: state.postsData.filter(p => p.id !== action.id)}
        default:
            return state;
    }
}

/*export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}*/
export const addPostActionCreator = (newPost: string) => {
    return {
        type: "profile/ADD-POST",
        newPost
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "profile/SET-USER-PROFILE",
        profile
    } as const
}

export const setUserStatus = (status: string) => {
    return {
        type: "profile/SET-USER-STATUS",
        status
    } as const
}
export const deletePost = (id: string) => {
    return {
        type: "profile/DELETE-POST",
        id
    } as const
}

export const getUserProfile = (userId: string | number | null) => async (dispatch: Dispatch) => {
    const data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
export const getUserStatus = (userId: string | number | null) => async (dispatch: Dispatch) => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(data))
}
export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const data = await profileAPI.updateStatus(status)

    data.resultCode === 0 && dispatch(setUserStatus(status))

}