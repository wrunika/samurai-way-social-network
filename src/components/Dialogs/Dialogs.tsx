import React, {ChangeEvent} from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes)=>void
}
const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    const messagesElement = props.dialogsPage.messagesData.map(m => <Message message={m.message} />);

    //const newMessageRef = React.createRef<HTMLTextAreaElement>();
    const onSendMessageClick = () => {
      //alert(newMessageRef.current?.value)
        props.dispatch(sendMessageAC(props.dialogsPage.newMessageBody))
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value;
        props.dispatch(updateNewMessageBodyAC(body))
    }

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