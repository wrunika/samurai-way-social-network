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
            {/*<div>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=1209512ffa4bff4bd792412b038f0aac2a77ca13-7012254-images-thumbs&n=13"}
                    alt={""}/>
            </div>*/}
            <div className={styles.avatar}>
                {/*<img
                    src={"https://avatars.mds.yandex.net/i?id=193f144b7eae00375ae3ac129ae1ca7f-5443655-images-thumbs&n=13"}
                    alt={""}/>*/}
                <img src={props.profile.photos?.small} alt="ava"/>
                <p>{props.profile.fullName}</p>
                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;