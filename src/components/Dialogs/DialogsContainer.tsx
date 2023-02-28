import React, {ChangeEvent} from 'react';
//import styles from './Dialogs.module.css'
//import DialogItem from "./DialogItem/DialogItem";
//import Message from "./Message/Message";
//import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


type DialogsContainerPropsType = {
    store: any
    //dialogsPage: DialogsPageType
    //dispatch: (action: ActionsTypes)=>void
}
const DialogsContainer = (props: DialogsContainerPropsType) => {

    //const newMessageRef = React.createRef<HTMLTextAreaElement>();
    const onSendMessageClick = () => {
      //alert(newMessageRef.current?.value)
        props.store.dispatch(sendMessageAC(props.store.getState().dialogsPage.newMessageBody))
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return(
        <Dialogs
            dialogsData={props.store.getState().dialogsPage.dialogsData}
            messagesData={props.store.getState().dialogsPage.messagesData}
            newMessageBody={props.store.getState().dialogsPage.newMessageBody}
            onSendMessageClick={onSendMessageClick}
            onNewMessageChange={onNewMessageChange}
        />
    )
}

export default DialogsContainer;