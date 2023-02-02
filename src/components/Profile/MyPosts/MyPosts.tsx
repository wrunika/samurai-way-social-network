import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {PostDataType} from "../../../redux/state";


type MyPostsPropsType = {
    postsData: PostDataType[]
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
      alert(newPostElement.current?.value)
    }
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Send</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>

        </div>
    );
}

export default MyPosts;