import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
const Profile = () => {

    let postsData: PostDataType[] = [
        {id: "1", message: "It is my first post.", likesCount: 5},
        {id: "2", message: "Hi, how have you been?", likesCount: 3},
        {id: "3", message: "The weather is nice today!", likesCount: 1},
    ]

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={postsData} />
        </div>
    );
}

export default Profile;