import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {AppStateType, AppThunkDispatch} from "./redux-store";


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
type PhotosType = {
    small: string
    large: string
}
type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType | any
    //contacts: any
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number | null
    photos: PhotosType
}

type ActionsType = ReturnType<typeof setUserProfile>
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>

let initialState = {
    postsData: [
        {id: "1", message: "It is my first post.", likesCount: 5},
        {id: "2", message: "Hi, how have you been?", likesCount: 3},
        {id: "3", message: "The weather is nice today!", likesCount: 1},
    ],
    //newPostText: 'it-incubator',
    profile: {
        aboutMe: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
            small: '',
            large: ''
        }
    },
    status: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
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
        case "SAVE-PHOTO-SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
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
export const savePhotoSuccess = (photos: PhotosType) => ({type: "SAVE-PHOTO-SUCCESS", photos} as const)

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

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: AppThunkDispatch, getState: ()=>AppStateType) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId)) //fit this
    } else {
        dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
        return Promise.reject(response.data.messages[0])
    }
}