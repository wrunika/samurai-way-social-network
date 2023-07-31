import React from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddPostReduxForm, NewPostType} from "./AddPostForm";


const MyPosts = React.memo((props: MyPostsPropsType) => {

    let postsElements = props.profilePage.postsData.map((p, index) => <Post key={index} name={props.profilePage.profile.fullName} photo={props.profilePage.profile.photos.large} message={p.message} likesCount={p.likesCount}/>)
    //const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = (post: NewPostType) => {
        props.addPost(post.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <div className={styles.form}>
                <h3>Create post</h3>
                <AddPostReduxForm onSubmit={addPost} />
            </div>
            <div>
                {postsElements}
            </div>

        </div>
    );
})

export default MyPosts;
