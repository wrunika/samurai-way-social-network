import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {PostDataType} from "../../../index";

/*type PostDataType = {
    id: string
    message: string
    likesCount: number
}*/
type MyPostsPropsType = {
    postsData: PostDataType[]
}

const MyPosts = (props: MyPostsPropsType) => {
    /*let postsData: PostDataType[] = [
        {id: "1", message: "It is my first post.", likesCount: 5},
        {id: "2", message: "Hi, how have you been?", likesCount: 3},
        {id: "3", message: "The weather is nice today!", likesCount: 1},
    ]*/
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