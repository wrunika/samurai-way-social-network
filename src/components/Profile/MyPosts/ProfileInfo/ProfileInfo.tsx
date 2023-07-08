import React, {ChangeEvent} from 'react';
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "./../../../../assets/images/user.png";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}
const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div>
                <img className={styles.avatar} src={props.profile.photos?.large || userPhoto} alt="ava"/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <p>{props.profile.fullName}</p>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;