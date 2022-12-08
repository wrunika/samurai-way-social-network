import React from 'react';
import styles from "./Post.module.css";

const Post = () => {
    return (
        <div className={styles.item}>
            <img
                src={"https://avatars.mds.yandex.net/i?id=c51291d7307ceef69a29521c604ed594628f5e98-4714015-images-thumbs&n=13"}
                alt={"photo"}/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    );
}

export default Post;