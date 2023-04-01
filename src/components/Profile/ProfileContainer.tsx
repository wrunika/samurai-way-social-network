import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    //profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string | number) => void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonPropsType, ProfileType>{
    componentDidMount() {
        const userId = this.props.match.params.userId || 28135;
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <>
                <Profile profile={this.props.profile} />
                {/*<Profile profilePage={this.props.profilePage.profile} />*/}
            </>
        );
    }


}

const mapStateToProps  = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
        //profilePage: state.profilePage
    }
}

const WithUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);

