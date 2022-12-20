import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";

const MyPosts = () => {
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
                <Post message={"It is my first post."} likesCount={5}/>
                <Post message={"Hi, how have you been?"} likesCount={3}/>
                <Post message={"The weather is nice today!"} likesCount={1}/>
            </div>

        </div>
    );
}

export default MyPosts;