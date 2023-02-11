import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
        </div>
    );
}

export default Profile;