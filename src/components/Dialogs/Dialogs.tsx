import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {NewMessageType, SendMessageReduxForm} from "./SendMessageForm";
//import {Redirect} from "react-router-dom";



const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogsData.map((d, index) => <DialogItem key={index} name={d.name} id={d.id} />);
    const messagesElement = props.dialogsPage.messagesData.map((m, index) => <Message key={index} message={m.message} />);


    const sendMessage = (message: NewMessageType) => {
        props.onSendMessageClick(message.newMessageBody)
    }
    //if (!props.isAuth) return <Redirect to={"login"} />;

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styles.messages}>
                <div>{messagesElement}</div>
            </div>
            <div className={styles.messages}>
                <SendMessageReduxForm onSubmit={sendMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;

