import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const SendMessageForm: React.FC<InjectedFormProps<NewMessageType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Send your message'} name={'newMessageBody'} component={'textarea'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const SendMessageReduxForm = reduxForm<NewMessageType>({form: 'sendNewMessage'})(SendMessageForm)

export type NewMessageType = {
    newMessageBody: string
}