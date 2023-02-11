

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

export const state: StateType = {
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
    //debugger
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
}

/*
let postsData: PostDataType[] = [
    {id: "1", message: "It is my first post.", likesCount: 5},
    {id: "2", message: "Hi, how have you been?", likesCount: 3},
    {id: "3", message: "The weather is nice today!", likesCount: 1},
]
let dialogsData: DialogDataType[] = [
    {id: "1", name: "Maks"},
    {id: "2", name: "Nick"},
    {id: "3", name: "Helen"},
    {id: "4", name: "Kris"},
    {id: "5", name: "Mike"},
    {id: "6", name: "Greg"},
]
let messagesData: MessageDataType[] = [
    {id: 1, message: "Hi."},
    {id: 1, message: "How have you been?"},
    {id: 1, message: "It was a perfect day!"},
    {id: 1, message: "Hm..."},
    {id: 1, message: "Nope!"},
    {id: 1, message: "So sorry."},
]*/
