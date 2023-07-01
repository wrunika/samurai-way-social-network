import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const AddPostForm: React.FC<InjectedFormProps<NewPostType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} placeholder={'Write something'} component={'textarea'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<NewPostType>({form: 'addNewPost'})(AddPostForm)

export type NewPostType = {
    newPostText: string
}