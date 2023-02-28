import React from 'react';
//import Post from "./Post/Post";
//import styles from "./MyPosts.module.css";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
//import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import MyPosts from "./MyPosts";


type MyPostsContainerPropsType = {
    store: any
    //profilePage: ProfilePageType
    //dispatch: (action: ActionsTypes)=>void
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    //let postsElements = props.profilePage.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    //const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        //debugger
        //const text = newPostElement.current.value;
        //props.addPost();
        //props.dispatch( {type: "ADD-POST", newPostText: props.profilePage.newPostText} );
        props.store.dispatch( addPostActionCreator(props.store.getState().profilePage.newPostText) );
        //props.updateNewPostText('')

        //console.log(newPostElement.current?.value)
        //props.addPost(newPostElement.current? newPostElement.current.value : '---')
    }
    const onPostChange = (text: string) => {
        //if (newPostElement.current) {
            //const text = newPostElement.current.value;
            //props.updateNewPostText(e.currentTarget.value)
            //props.dispatch( {type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value} )
            props.store.dispatch( updateNewPostTextActionCreator(text) )
        //}
    }

    return (
        <MyPosts
            posts={props.store.getState().profilePage.postsData}
            newPostText={props.store.getState().profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={onPostChange}
        />
    );
}

export default MyPostsContainer;