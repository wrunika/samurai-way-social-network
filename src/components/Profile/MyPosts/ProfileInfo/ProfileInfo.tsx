import React, {ChangeEvent, useState} from 'react';
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "./../../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import edit from "./../../../../assets/images/edit.png";
import {ProfileData} from "./ProfileData/ProfileData";


type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
    saveProfile: (formContactsData: any) => void
}
const ProfileInfo = (props: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const goToEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formContactsData: any) => {
        props.saveProfile(formContactsData)
        setEditMode(false)
    }

    return (
        <div className={styles.profileData}>
            <div className={styles.avatarAndInfo}>
                <div className={styles.avatarWrapper}>
                    <img className={styles.avatar} src={props.profile.photos?.large || userPhoto} alt="ava"/>
                    {props.isOwner &&
                        <div className={styles.inputWrapper}>
                            <input type="file" name="file" id="input-file"
                                   className={styles.inputFile + ' ' + styles.input} multiple
                                   onChange={onMainPhotoSelected}/>
                            <label htmlFor="input-file" className={styles.addPhotoBtn}>
                                <img className={styles.inputIcon} src={edit} alt={"choose image"}/>
                            </label>
                        </div>
                    }
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={goToEditMode}/>}
            </div>

            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>

        </div>
    );
}

export default ProfileInfo;


