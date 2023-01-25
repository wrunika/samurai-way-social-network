import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {PostDataType} from "../../../redux/state";


type MyPostsPropsType = {
    postsData: PostDataType[]
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;