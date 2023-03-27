import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Header from "./Header";
import {AuthDataType, AuthType, setAuthUserData} from "../../redux/auth-reducer";



type MapStateToPropsType = {
    auth: AuthType
}
type MapDispatchToPropsType = {
    setAuthUserData: (auth: AuthDataType)=>void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType, AuthType>{
    componentDidMount() {
        //debugger
        console.log('i make request')
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                debugger
                response.data.resultCode === 0 && this.props.setAuthUserData(response.data.data);
                console.log(response.data)
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

