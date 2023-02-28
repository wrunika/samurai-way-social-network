import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
//import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import {StoreType} from "./redux/store";

type AppPropsType = {
    //store: StoreType
    store: any
}

function App(props: AppPropsType) {
    const state = props.store.getState();
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path="/dialogs" render={ ()=> <Dialogs dialogsPage={state.dialogsPage} dispatch={props.store.dispatch.bind(props.store)} /> } />
                    <Route path="/profile" render={ ()=> <Profile profilePage={state.profilePage} dispatch={props.store.dispatch.bind(props.store)} /> } />*/}
                    <Route path="/dialogs" render={ ()=> <DialogsContainer store={props.store} /> } />
                    <Route path="/profile" render={ ()=> <Profile store={props.store} /> } />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    {/*<Profile />*/}
                    {/*<Dialogs />*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
