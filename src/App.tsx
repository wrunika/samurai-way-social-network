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
import {DialogDataType, MessageDataType, PostDataType} from "./index";

type AppPropsType = {
    dialogsData: DialogDataType[]
    messagesData: MessageDataType[]
    postsData: PostDataType[]
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ ()=> <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} /> } />
                    <Route path="/profile" render={ ()=> <Profile postsData={props.postsData} /> } />
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
