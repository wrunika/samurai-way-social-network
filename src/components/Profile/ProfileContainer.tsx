import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";


type MapStateToPropsType = {
    profile: ProfileType
    //profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType)=>void
}
export type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType, ProfileType>{
    componentDidMount() {
        debugger
        console.log('i make request')
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile}) (ProfileContainer)

