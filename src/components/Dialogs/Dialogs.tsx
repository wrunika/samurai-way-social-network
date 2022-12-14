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

    let dialogsElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesData: MessageDataType[] = [
        {id: 1, message: "Hi."},
        {id: 1, message: "How have you been?"},
        {id: 1, message: "It was a perfect day!"},
        {id: 1, message: "Hm..."},
        {id: 1, message: "Nope!"},
        {id: 1, message: "So sorry."},
    ]
    let messagesElement = messagesData.map(m => <Message message={m.message} />)

    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={styles.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;