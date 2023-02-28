import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, state, subscribe} from "./redux/state";



import './index.css';
import {store} from "./redux/redux-store";

//import {updateNewPostText} from "./redux/state";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)