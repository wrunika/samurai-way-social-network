import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, updateUserStatus, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string | number) => void
    getUserStatus: (userId: string | number) => void
    updateUserStatus: (status: string) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonPropsType, ProfileType>{
    componentDidMount() {
        const userId = this.props.match.params.userId || 28135;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {

        return (
            <>
                <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
            </>
        );
    }
}

const mapStateToProps  = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withAuthRedirect,
    withRouter
) (ProfileContainer)