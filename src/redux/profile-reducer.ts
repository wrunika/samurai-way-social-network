import {ActionsTypes, PostDataType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostDataType = {id: "5", message: action.newPostText, likesCount: 0};
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
export const addPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}