import React, {ChangeEvent, useState} from 'react';
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../../../redux/profile-reducer";
import {Preloader} from "../../../common/Preloader";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "./../../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";


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
        return <Preloader />
    }

    const onMainPhotoSelected = (e:ChangeEvent<HTMLInputElement>) => {
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
        <div>
            <div  className={styles.profileData}>
                <img className={styles.avatar} src={props.profile.photos?.large || userPhoto} alt="ava"/>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}  />
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={goToEditMode}/>}

                <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo;

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div className={styles.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}: any) => { /// fix any
//const ProfileData = ({profile, isOwner}: any) => { /// fix any

    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name:</b>: {profile.fullName}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob ?
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div> : <></>
            }
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}