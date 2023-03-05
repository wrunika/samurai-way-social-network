import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {addPost, state, subscribe} from "./redux/state";


import './index.css';
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider, StoreContext} from "./StoreContext";

//import {updateNewPostText} from "./redux/state";

export const rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            {/*<StoreContext.Provider value={store}>*/}
            <Provider store={store}>
                <App/>
                {/*<App store={store}/>*/}
            </Provider>
            {/*</StoreContext.Provider>*/}
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)