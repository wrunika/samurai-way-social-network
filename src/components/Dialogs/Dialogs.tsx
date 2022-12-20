import React from 'react';
import styles from './Dialogs.module.css'

const Dialogs = () => {
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    Maks
                </div>
                <div className={styles.dialog}>
                    Nick
                </div>
                <div className={styles.dialog + ' ' + styles.active}>
                    Helen
                </div>
                <div className={styles.dialog}>
                    Kris
                </div>
                <div className={styles.dialog}>
                    Mike
                </div>
                <div className={styles.dialog}>
                    Greg
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message}>
                    Hi.
                </div>
                <div className={styles.message}>
                    How have you been?
                </div>
                <div className={styles.message}>
                    It was a perfect day!
                </div>
                <div className={styles.message}>
                    Hm...
                </div>
                <div className={styles.message}>
                    Nope.
                </div>
                <div className={styles.message}>
                    Excuse me.
                </div>
            </div>
        </div>
    )
}

export default Dialogs;