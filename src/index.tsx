import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
]

ReactDOM.render(
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />,
  document.getElementById('root')
);