import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";
import styles from "./../Profile/MyPosts/MyPosts.module.css";
import s from "./Dialogs.module.css";


const maxLength50 = maxLength(50);

const SendMessageForm: React.FC<InjectedFormProps<NewMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'Send your message...'}
                    name={'newMessageBody'}
                    component={Textarea}
                    validate={[required, maxLength50]}
                    className={s.textarea}
                />
            </div>
            <div>
                <button className={styles.sendPostBtn}>Send</button>
            </div>
        </form>
    )
}

export const SendMessageReduxForm = reduxForm<NewMessageType>({form: 'sendNewMessage'})(SendMessageForm)

export type NewMessageType = {
    newMessageBody: string
}