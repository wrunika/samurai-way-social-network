import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {RRMyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";



type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <RRMyPostsContainer />
        </div>
    );
}

export default Profile;