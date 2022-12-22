import React from 'react';
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}
type MessagePropsType = {
    message: string
}

type DialogDataType = {
    id: string
    name: string
}
type MessageDataType = {
    id: number
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;

  return(
      <div className={styles.dialog + ' ' + styles.active}>
          <NavLink to={path}>{props.name}</NavLink>
      </div>
  )
}

const Message = (props: MessagePropsType) => {
  return(
      <div className={styles.message}>
          {props.message}
      </div>
  )
}

const Dialogs = () => {
    let dialogsData: DialogDataType[] = [
        {id: "1", name: "Maks"},
        {id: "2", name: "Nick"},
        {id: "3", name: "Helen"},
        {id: "4", name: "Kris"},
        {id: "5", name: "Mike"},
        {id: "6", name: "Greg"},
    ]
    let messagesData: MessageDataType[] = [
        {id: 1, message: "Hi."},
        {id: 1, message: "How have you been?"},
        {id: 1, message: "It was a perfect day!"},
        {id: 1, message: "Hm..."},
        {id: 1, message: "Nope!"},
        {id: 1, message: "So sorry."},
    ]
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={styles.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <Message message={messagesData[3].message} />
                <Message message={messagesData[4].message} />
                <Message message={messagesData[5].message} />
            </div>
        </div>
    )
}

export default Dialogs;