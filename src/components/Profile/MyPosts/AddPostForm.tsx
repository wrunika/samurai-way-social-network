import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength30 = maxLength(30);
const AddPostForm: React.FC<InjectedFormProps<NewPostType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostText'}
                    placeholder={'Write something'}
                    component={Textarea}
                    validate={[required, maxLength30]}
                />
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