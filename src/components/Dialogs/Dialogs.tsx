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
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name="Maks" id="1"/>
                <DialogItem name="Nick" id="2"/>
                <DialogItem name="Helen" id="3"/>
                <DialogItem name="Kris" id="4"/>
                <DialogItem name="Mike" id="5"/>
                <DialogItem name="Greg" id="6"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hi." />
                <Message message="How have you been?" />
                <Message message="It was a perfect day!" />
                <Message message="Hm..." />
                <Message message="Nope!" />
                <Message message="So sorry." />
            </div>
        </div>
    )
}

export default Dialogs;