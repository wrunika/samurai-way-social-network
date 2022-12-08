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
                <Post message={"It is my first post."} likesCount={5}/>
                <Post message={"Hi, how have you been?"} likesCount={3}/>
                <Post message={"The weather is nice today!"} likesCount={1}/>
            </div>

        </div>
    );
}

export default MyPosts;