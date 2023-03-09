import React from 'react';
//import styles from './Profile.module.css'
//import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
//import {ActionsTypes, ProfilePageType} from "../../redux/store";
import {RRMyPostsContainer} from "./MyPosts/MyPostsContainer";


/*type ProfilePropsType = {
    //profilePage: ProfilePageType
    //dispatch: (action: ActionsTypes)=>void
    store: any
}*/
//const Profile = (props: ProfilePropsType) => {
const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <RRMyPostsContainer />
            {/*<MyPostsContainer store={props.store} />*/}
            {/*<MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch} />*/}
            {/*<MyPosts profilePage={props.profilePage} dispatch={props.dispatch} />*/}
        </div>
    );
}

export default Profile;