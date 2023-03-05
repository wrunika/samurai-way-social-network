import React from 'react';
//import Post from "./Post/Post";
//import styles from "./MyPosts.module.css";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
//import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


/*type MyPostsContainerPropsType = {
    store: any
    //profilePage: ProfilePageType
    //dispatch: (action: ActionsTypes)=>void
}*/

//const MyPostsContainer = (props: MyPostsContainerPropsType) => {
const MyPostsContainer = () => {

    //let postsElements = props.profilePage.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    //const newPostElement = React.createRef<HTMLTextAreaElement>();
   /* const addPost = () => {
        //debugger
        //const text = newPostElement.current.value;
        //props.addPost();
        //props.dispatch( {type: "ADD-POST", newPostText: props.profilePage.newPostText} );
        props.store.dispatch(addPostActionCreator(props.store.getState().profilePage.newPostText));
        //props.updateNewPostText('')

        //console.log(newPostElement.current?.value)
        //props.addPost(newPostElement.current? newPostElement.current.value : '---')
    }*/
   /* const onPostChange = (text: string) => {
        //if (newPostElement.current) {
        //const text = newPostElement.current.value;
        //props.updateNewPostText(e.currentTarget.value)
        //props.dispatch( {type: "UPDATE-NEW-POST-TEXT", newText: e.currentTarget.value} )
        store.dispatch(updateNewPostTextActionCreator(text))
        //}
    }*/

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addPost = () => {
                        store.dispatch(addPostActionCreator(store.getState().profilePage.newPostText));
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))
                    }
                    return (
                        <MyPosts
                            posts={store.getState().profilePage.postsData}
                            newPostText={store.getState().profilePage.newPostText}
                            addPost={addPost}
                            updateNewPostText={onPostChange}
                        />)
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;