import React from 'react';
//import styles from './Profile.module.css'
//import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
//import {ActionsTypes, ProfilePageType} from "../../redux/store";
import {RRMyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePageType, ProfileType} from "../../redux/profile-reducer";


/*type ProfilePropsType = {
    //profilePage: ProfilePageType
    //dispatch: (action: ActionsTypes)=>void
    store: any
}*/
//const Profile = (props: ProfilePropsType) => {
type ProfilePropsType = {
    profile: ProfileType
    //profilePage: ProfilePageType
    //setUserProfile: (profile: ProfileType)=>void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            {/*<ProfileInfo profile={props.profilePage.profile} />*/}
            <RRMyPostsContainer />
            {/*<MyPostsContainer store={props.store} />*/}
            {/*<MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch} />*/}
            {/*<MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />*/}
        </div>
    );
}

export default Profile;