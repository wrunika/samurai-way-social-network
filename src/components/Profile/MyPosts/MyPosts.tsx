import React from 'react';
import Post from "./Post/Post";
import styles from "../Profile.module.css";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className={styles.posts}>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    );
}

export default MyPosts;