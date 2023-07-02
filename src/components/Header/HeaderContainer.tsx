import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Header from "./Header";
import {AuthType, getAuthUserData, logout} from "../../redux/auth-reducer";



type MapStateToPropsType = {
    auth: AuthType
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
export type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType, AuthType>{
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header auth={this.props.auth} logout={this.props.logout} />
        );
    }


}

const mapStateToProps  = (state: AppStateType): MapStateToPropsType => {
    return {
        auth: state.auth
    }
}


export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);

