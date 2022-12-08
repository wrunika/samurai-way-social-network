import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <div>
                <img
                    src={"https://avatars.mds.yandex.net/i?id=1209512ffa4bff4bd792412b038f0aac2a77ca13-7012254-images-thumbs&n=13"}
                    alt={""}/>
            </div>
            <div>
                <img className={styles.avatar}
                     src={"https://avatars.mds.yandex.net/i?id=193f144b7eae00375ae3ac129ae1ca7f-5443655-images-thumbs&n=13"}
                     alt={""}/>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;