import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
/*import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {ActionsTypes, PostDataType, ProfilePageType} from "../../../redux/store";*/



/*type MyPostsPropsType = {
    //profilePage: ProfilePageType
    //dispatch: (action: ActionsTypes)=>void
    posts: PostDataType[]
    newPostText: string
    addPost: ()=>void
    updateNewPostText: (s: string)=>void
}*/

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.profilePage.postsData.map((p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)
    //const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        //debugger
        //const text = newPostElement.current.value;
        props.addPost();
        //props.dispatch( {type: "ADD-POST", newPostText: props.profilePage.newPostText} );
        //props.dispatch( addPostActionCreator(props.profilePage.newPostText) );
        //props.updateNewPostText('')

        //console.log(newPostElement.current?.value)
        //props.addPost(newPostElement.current? newPostElement.current.value : '---')
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //if (newPostElement.current) {
            //const text = newPostElement.current.value;
            props.updateNewPostText(e.currentTarget.value)
            //props.dispatch( {type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value} )
        //}
        //props.dispatch( updateNewPostTextActionCreator(e.currentTarget.value) )
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePage.newPostText}/>
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