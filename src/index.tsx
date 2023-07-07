import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, state, subscribe} from "./redux/state";


import './index.css';
import {store} from "./redux/redux-store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
//import {Provider, StoreContext} from "./StoreContext";

//import {updateNewPostText} from "./redux/state";



ReactDOM.render(
    <HashRouter>
        {/*<StoreContext.Provider value={store}>*/}
        <Provider store={store}>
            <App/>
            {/*<App store={store}/>*/}
        </Provider>
        {/*</StoreContext.Provider>*/}
    </HashRouter>,
    document.getElementById('root')
);








/*
export const rerenderEntireTree = () => {
//debugger
    ReactDOM.render(
        <BrowserRouter>
            {/!*<StoreContext.Provider value={store}>*!/}
            <Provider store={store}>
                <App/>
                {/!*<App store={store}/>*!/}
            </Provider>
            {/!*</StoreContext.Provider>*!/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)*/
