import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Header from "./Header";
import {AuthDataType, AuthType, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";



type MapStateToPropsType = {
    auth: AuthType
}
type MapDispatchToPropsType = {
    setAuthUserData: (auth: AuthDataType)=>void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType, AuthType>{
    componentDidMount() {
        authAPI.me()
            .then(data => {
                data.resultCode === 0 && this.props.setAuthUserData(data.data);
            })
    }

    render() {
        //debugger
        console.log(this.props)
        return (
            <Header auth={this.props.auth} />
        );
    }


}

const mapStateToProps  = (state: AppStateType): MapStateToPropsType => {
    return {
        auth: state.auth,
        //isAuth: state.auth.isAuth
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setAuthUserData}) (HeaderContainer);

