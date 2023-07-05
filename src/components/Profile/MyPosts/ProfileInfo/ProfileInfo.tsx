import React from 'react';
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}
const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={styles.avatar}>
                <img src={props.profile.photos?.small} alt="ava"/>
                <p>{props.profile.fullName}</p>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;