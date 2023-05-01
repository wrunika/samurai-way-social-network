import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
//import {Redirect} from "react-router-dom";



const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogsData.map((d, index) => <DialogItem key={index} name={d.name} id={d.id} />);
    const messagesElement = props.dialogsPage.messagesData.map((m, index) => <Message key={index} message={m.message} />);

    const onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value;
        props.onNewMessageChange(body);
    }
    //if (!props.isAuth) return <Redirect to={"login"} />;

    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styles.messages}>
                <div>{messagesElement}</div>
            </div>
            <div className={styles.messages}>
                <div><textarea value={props.dialogsPage.newMessageBody} onChange={onNewMessageChange} placeholder={'Enter your message'} ></textarea></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;