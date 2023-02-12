export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
export type DialogDataType = {
    id: string
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type ProfilePageType = {
    postsData: PostDataType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogsData: DialogDataType[]
    messagesData: MessageDataType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    _callSubscriber: ()=>void
    subscribe: (observer: ()=>void)=>void
    getState: ()=> StateType
    /*addPost: ()=>void
    updateNewPostText: (newText: string)=>void*/
    dispatch: (action: ActionsTypes)=>void
}

type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export const updateNewPostTextActionCreator = (newText: string): UpdateNewPostTextActionType => {
  return {
      type: "UPDATE-NEW-POST-TEXT",
      newText: newText
  }
}
export const addPostActionCreator = (newPostText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    }
}
export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: "1", message: "It is my first post.", likesCount: 5},
                {id: "2", message: "Hi, how have you been?", likesCount: 3},
                {id: "3", message: "The weather is nice today!", likesCount: 1},
            ],
            newPostText: 'it-incubator'
        },
        dialogsPage: {
            dialogsData: [
                {id: "1", name: "Maks"},
                {id: "2", name: "Nick"},
                {id: "3", name: "Helen"},
                {id: "4", name: "Kris"},
                {id: "5", name: "Mike"},
                {id: "6", name: "Greg"},
            ],
            messagesData: [
                {id: 1, message: "Hi."},
                {id: 1, message: "How have you been?"},
                {id: 1, message: "It was a perfect day!"},
                {id: 1, message: "Hm..."},
                {id: 1, message: "Nope!"},
                {id: 1, message: "So sorry."},
            ]
        }
    },
    /*addPost() {
        const newPost: PostDataType = {id: "5", message: this._state.profilePage.newPostText, likesCount: 0};
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },*/
    _callSubscriber() {
        console.log('state was changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostDataType = {id: "5", message: action.newPostText, likesCount: 0};
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        }
    }
}







/*export const state: StateType = {
    profilePage: {
        postsData: [
            {id: "1", message: "It is my first post.", likesCount: 5},
            {id: "2", message: "Hi, how have you been?", likesCount: 3},
            {id: "3", message: "The weather is nice today!", likesCount: 1},
        ],
        newPostText: 'it-incubator'
    },
    dialogsPage: {
        dialogsData: [
            {id: "1", name: "Maks"},
            {id: "2", name: "Nick"},
            {id: "3", name: "Helen"},
            {id: "4", name: "Kris"},
            {id: "5", name: "Mike"},
            {id: "6", name: "Greg"},
        ],
        messagesData: [
            {id: 1, message: "Hi."},
            {id: 1, message: "How have you been?"},
            {id: 1, message: "It was a perfect day!"},
            {id: 1, message: "Hm..."},
            {id: 1, message: "Nope!"},
            {id: 1, message: "So sorry."},
        ]
    }
}

let rerenderEntireTree = () => {
    console.log('state was changed')
}

export const addPost = () => {
    const newPost: PostDataType = {id: "5", message: state.profilePage.newPostText, likesCount: 0};
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: ()=>void) => {
    rerenderEntireTree = observer;
}*/