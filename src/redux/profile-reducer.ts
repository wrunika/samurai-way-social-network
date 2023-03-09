//import {ActionsTypes} from "./store";
import {ActionsTypes} from "./redux-store";


export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
export type ProfilePageType = {
    postsData: PostDataType[]
    newPostText: string
}

let initialState = {
    postsData: [
        {id: "1", message: "It is my first post.", likesCount: 5},
        {id: "2", message: "Hi, how have you been?", likesCount: 3},
        {id: "3", message: "The weather is nice today!", likesCount: 1},
    ],
    newPostText: 'it-incubator'
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostDataType = {id: "5", message: state.newPostText, likesCount: 0};
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
    /*if (action.type === "ADD-POST") {
        const newPost: PostDataType = {id: "5", message: action.newPostText, likesCount: 0};
        state.postsData.push(newPost)
        state.newPostText = ''
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        state.newPostText = action.newText

    return state

     */
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const addPostActionCreator = () => {
    return {
        type: "ADD-POST",
        /*newPostText: newPostText*/
    } as const
}