import React from 'react';
import styles from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={styles.item}>
            <img
                src={"https://avatars.mds.yandex.net/i?id=c51291d7307ceef69a29521c604ed594628f5e98-4714015-images-thumbs&n=13"}
                alt={"photo"}/>
            {props.message}
            <div>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    );
}

export default Post;