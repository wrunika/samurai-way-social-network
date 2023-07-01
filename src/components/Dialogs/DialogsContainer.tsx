import React from 'react';
import {DialogsPageType, sendMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    //onNewMessageChange: (body: string)=>void
    onSendMessageClick: (newMessageBody: string)=>void
}
export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
      dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        /*onNewMessageChange: (body: string)=>{
            dispatch(updateNewMessageBodyAC(body))
        },*/
        onSendMessageClick: (newMessageBody: string)=>{
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)























/*type DialogsContainerPropsType = {
    store: any
    //dialogsPage: DialogsPageType
    //dispatch: (action: ActionsTypes)=>void
}*/
//const DialogsContainer = (props: DialogsContainerPropsType) => {


//const newMessageRef = React.createRef<HTMLTextAreaElement>();
/*const onSendMessageClick = () => {
  //alert(newMessageRef.current?.value)
    props.store.dispatch(sendMessageAC(props.store.getState().dialogsPage.newMessageBody))
}*/
/*const onNewMessageChange = (body: string) => {
    props.store.dispatch(updateNewMessageBodyAC(body))
}*/
/*
const DialogsContainer = () => {
    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    /!*const onSendMessageClick = () => {
                        store.dispatch(sendMessageAC(store.getState().dialogsPage.newMessageBody))
                    }*!/
                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageAC())
                    }
                    const onNewMessageChange = (body: string) => {
                        store.dispatch(updateNewMessageBodyAC(body))
                    }
                    return (
                    <Dialogs
                        dialogsData={store.getState().dialogsPage.dialogsData}
                        messagesData={store.getState().dialogsPage.messagesData}
                        newMessageBody={store.getState().dialogsPage.newMessageBody}
                        onSendMessageClick={onSendMessageClick}
                        onNewMessageChange={onNewMessageChange}
                    />)
                }
                }
        </StoreContext.Consumer>
    )
}
*/

//export default DialogsContainer;