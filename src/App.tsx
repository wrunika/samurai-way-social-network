import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
//import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
//import Login from "./components/Login/Login";
import {AuthType} from "./redux/auth-reducer";
import {AppStateType} from "./redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader";
import withSuspense from "./hoc/withSuspense";

const DialogsContainer = React.lazy(( ) => import( "./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(( ) => import( "./components/Profile/ProfileContainer"));
const Login = React.lazy(( ) => import( "./components/Login/Login"));

type MapStateToPropsType = {
    isInitialized: boolean
}
type MapDispatchToPropsType = {
    initializeApp: () => void
}
type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

class App extends React.Component<AppPropsType, AuthType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) return <Preloader />

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path="/dialogs" render={() => <DialogsContainer/>}/>*/}
                   {/* <Route path="/dialogs" render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <DialogsContainer/>
                        </React.Suspense>
                    }}/>*/}
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                    {/*<Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>*/}
                    {/*<Route path="/profile/:userId?" render={() => {
                        return <React.Suspense fallback={<Preloader/>}>
                            <ProfileContainer/>
                        </React.Suspense>
                    }}/>*/}
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    {/*<Route path="/login" render={() => <Login/>}/>*/}
                    <Route path="/login" render={withSuspense(Login)}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps  = (state: AppStateType): MapStateToPropsType => {
    return {
        isInitialized: state.app.isInitialized
    }
}

export default compose<React.ComponentType> (
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializeApp}),
    withRouter
) (App);
