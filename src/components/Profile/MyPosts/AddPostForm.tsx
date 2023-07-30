import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import styles from "./MyPosts.module.css";


const maxLength30 = maxLength(30);
const AddPostForm: React.FC<InjectedFormProps<NewPostType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'newPostText'}
                    placeholder={'Write something here...'}
                    component={Textarea}
                    validate={[required, maxLength30]}
                    className={styles.textarea}
                />
            </div>
            <div>
                <button className={styles.sendPostBtn}>Send</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<NewPostType>({form: 'addNewPost'})(AddPostForm)

export type NewPostType = {
    newPostText: string
}