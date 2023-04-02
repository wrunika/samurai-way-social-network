import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {RRMyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


/*type ProfilePropsType = {
    //profilePage: ProfilePageType
    //dispatch: (action: ActionsTypes)=>void
    store: any
}*/
//const Profile = (props: ProfilePropsType) => {
type ProfilePropsType = {
    profile: ProfileType
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <RRMyPostsContainer />
        </div>
    );
}

export default Profile;