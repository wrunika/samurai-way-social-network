import styles from "./ProfileData.module.css";
import React from "react";
import facebookIcon from "../../../../../assets/images/facebook.png";
import websiteIcon from "../../../../../assets/images/website.png";
import vkIcon from "../../../../../assets/images/vk.png";
import twitterIcon from "../../../../../assets/images/twitter.png";
import instagramIcon from "../../../../../assets/images/instagram.png";
import youtubeIcon from "../../../../../assets/images/youtube.png";
import githubIcon from "../../../../../assets/images/github.png";
import mainLinkIcon from "../../../../../assets/images/link.png";
import {Link} from "react-router-dom";

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div className={styles.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export const ProfileData = ({profile, isOwner, goToEditMode}: any) => { /// fix any
//const ProfileData = ({profile, isOwner}: any) => { /// fix any

    const contactsIcons = [facebookIcon, websiteIcon, vkIcon, twitterIcon, instagramIcon, youtubeIcon, githubIcon, mainLinkIcon];

    const arrayOfContacts: any[] = Object.values(profile.contacts).map((value) => ({ 'link': value }));
    for (let i = 0; i < contactsIcons.length; i++) {
        arrayOfContacts[i].icon = contactsIcons[i];
    }

    return (
        <div className={styles.profileDataInfo}>
            <div className={styles.myName}>
                {profile.fullName}
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.info}>
                    <div>
                        <span className={styles.infoTitle}>About me</span>: {profile.aboutMe || 'no description'}
                    </div>
                    <div>
                        <span className={styles.infoTitle}>Looking for a job</span>: {profile.lookingForAJob ? "yes" : "no"}
                    </div>
                    {profile.lookingForAJob ?
                        <div>
                            <span className={styles.infoTitle}>My professional skills</span>: {profile.lookingForAJobDescription}
                        </div> : <></>
                    }
                    <div>
                        {arrayOfContacts.map((el, index) => {
                            return(
                                <Link to={el.link || '#'} className={styles.socialLink} key={index}>
                                    <img className={styles.socialIcon} src={el.icon} alt={'social icon'} />
                                </Link>
                            )
                        })}
                    </div>
                    <div className={styles.contactsWrapper}>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                    })}
                    </div>
                </div>
                {isOwner && <div className={styles.editBtnWrapper}>
                    <button className={styles.editBtn} onClick={goToEditMode}>Edit profile</button>
                </div>}
            </div>
        </div>
    )
}