import React from 'react';
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
}
const Dialogs = (props: DialogsPropsType) => {

    const dialogsElement = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />);
    const messagesElement = props.dialogsPage.messagesData.map(m => <Message message={m.message} />);

    const newMessageRef = React.createRef<HTMLTextAreaElement>();
    const addMessage = () => {
      alert(newMessageRef.current?.value)
    }

    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styles.messages}>
                {messagesElement}
            </div>
            <div className={styles.messages}>
                <textarea ref={newMessageRef}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;