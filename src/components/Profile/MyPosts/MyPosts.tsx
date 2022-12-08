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
                <Post message={"It is my first post."}/>
                <Post message={"Hi, how have you been?"}/>
                <Post message={"The weather is nice today!"}/>
            </div>

        </div>
    );
}

export default MyPosts;