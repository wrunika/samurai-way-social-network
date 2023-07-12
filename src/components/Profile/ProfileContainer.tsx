import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    ProfileType,
    savePhoto,
    saveProfile
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string | number | null) => void
    getUserStatus: (userId: string | number | null) => void
    updateUserStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: (formContactsData: any) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonPropsType, ProfileType>{
    refreshProfile() {
        const userId = this.props.match.params.userId || this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile()
        /*const userId = this.props.match.params.userId || this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);*/
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<ProfileType>) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
        /*const userId = this.props.match.params.userId || this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);*/
    }

    render() {

        return (
            <>
                <Profile
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}  saveProfile={this.props.saveProfile}/>
            </>
        );
    }
}

const mapStateToProps  = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withAuthRedirect,
    withRouter
) (ProfileContainer)