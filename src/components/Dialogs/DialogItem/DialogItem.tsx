import React from 'react';
import styles from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import user from "./../../../assets/images/user.png";

type DialogItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;

  return(
      <div className={styles.dialog + ' ' + styles.active}>
          <NavLink to={path}>
              <img src={user} alt={'user'}/>
              <span className={styles.name}>{props.name}</span>
          </NavLink>
      </div>
  )
}


export default DialogItem;