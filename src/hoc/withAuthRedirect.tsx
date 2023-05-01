import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
//import Profile from "../components/Profile/Profile";

type MapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
      isAuth: state.auth.isAuth
  }
}
export function withAuthRedirect <T>(Component: ComponentType<T>) {
    //debugger
    const RedirectComponent = (props: MapStateToPropsType) => {
      //debugger
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"} />
        return <Component {...restProps as T} />
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}