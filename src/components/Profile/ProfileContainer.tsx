import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType
    //profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType)=>void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType
type CommonPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<CommonPropsType, ProfileType>{
    componentDidMount() {
        debugger
        console.log('i make request')
        const userId = this.props.match.params.userId || 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
                console.log(response.data)
            })
    }

    render() {
        debugger
        console.log(this.props)
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);

