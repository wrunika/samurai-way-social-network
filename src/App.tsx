import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ ()=> <Dialogs dialogsPage={props.state.dialogsPage} /> } />
                    <Route path="/profile" render={ ()=> <Profile profilePage={props.state.profilePage} /> } />
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
