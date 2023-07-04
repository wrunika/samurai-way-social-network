import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostReduxForm, NewPostType} from "./AddPostForm";


const MyPosts = React.memo((props: MyPostsPropsType) => {

    let postsElements = props.profilePage.postsData.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)
    //const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = (post: NewPostType) => {
        props.addPost(post.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addPost} />
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>

        </div>
    );
})

export default MyPosts;
