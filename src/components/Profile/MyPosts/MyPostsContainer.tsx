import React from 'react';
//import Post from "./Post/Post";
//import styles from "./MyPosts.module.css";
import {
    addPostActionCreator, ProfilePageType,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
//import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import MyPosts from "./MyPosts";
//import {StoreContext} from "../../../StoreContext";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";





type MapStateToPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string)=>void
    addPost: ()=>void
}
export type MyPostsPropsType = {
    profilePage: ProfilePageType
    addPost: ()=>void
    updateNewPostText: (text: string)=>void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
      profilePage: state.profilePage
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
      addPost: () => {
          dispatch(addPostActionCreator())
      },
      updateNewPostText: (text: string) => {
          dispatch(updateNewPostTextActionCreator(text))
      }
  }
}

export const RRMyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

















/*type MyPostsContainerPropsType = {
    store: any
    //profilePage: ProfilePageType
    //dispatch: (action: ActionsTypes)=>void
}*/

//const MyPostsContainer = (props: MyPostsContainerPropsType) => {


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
/*const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addPost = () => {
                        store.dispatch(addPostActionCreator());
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
}*/


//export default MyPostsContainer;