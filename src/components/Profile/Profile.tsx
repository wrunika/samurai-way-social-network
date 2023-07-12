import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import {RRMyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";



type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (formContactsData: any) => void
}
const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                saveProfile={props.saveProfile}

            />
            <RRMyPostsContainer />
        </div>
    );
}

export default Profile;