import React, {ChangeEvent} from 'react';
//import styles from './Dialogs.module.css'
//import DialogItem from "./DialogItem/DialogItem";
//import Message from "./Message/Message";
//import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import { StoreContext } from '../../StoreContext';
import Dialogs from "./Dialogs";


/*type DialogsContainerPropsType = {
    store: any
    //dialogsPage: DialogsPageType
    //dispatch: (action: ActionsTypes)=>void
}*/
//const DialogsContainer = (props: DialogsContainerPropsType) => {
const DialogsContainer = () => {

    //const newMessageRef = React.createRef<HTMLTextAreaElement>();
    /*const onSendMessageClick = () => {
      //alert(newMessageRef.current?.value)
        props.store.dispatch(sendMessageAC(props.store.getState().dialogsPage.newMessageBody))
    }*/
    /*const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }*/

    return(
        <StoreContext.Consumer>
            {
                (store) => {
                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageAC(store.getState().dialogsPage.newMessageBody))
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

export default DialogsContainer;