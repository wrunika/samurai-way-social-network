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
import {StateType, updateNewPostText} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ ()=> <Dialogs dialogsPage={props.state.dialogsPage} /> } />
                    <Route path="/profile" render={ ()=> <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} /> } />
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
