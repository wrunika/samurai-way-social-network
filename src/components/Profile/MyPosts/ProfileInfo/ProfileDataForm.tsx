import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import styles from "./ProfileInfo.module.css"
import {ProfileType} from "../../../../redux/profile-reducer";
import React from "react";


type PropsType = {
    profile: ProfileType
    //handleSubmit: any
    //error: any
}
//const ProfileDataForm: React.FC<InjectedFormProps<PropsType>> = ({profile, handleSubmit,error}) => {
const ProfileDataForm: React.FC<InjectedFormProps<PropsType>> = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button onClick={() => {
                }}>Save
                </button>
                {props.error && <div className={styles.formSummaryError}>
                    {props.error}
                </div>}
            </div>
            <div>
                <b>Full name:</b>: <Field name={'fullName'} placeholder={'Full name'} component={Input} />
            </div>
            <div>
                <b>Looking for a job</b>: <Field name={'lookingForAJob'} component={Input}/>
            </div>
            <div>
                <b>My professional skills</b>: <Field name={"lookingForAJobDescription"} placeholder={"My professional skills"} component={Textarea} />
            </div>
            <div>
                <b>About Me</b>: <Field name={"aboutMe"} placeholder={"About Me"} component={Textarea} />
            </div>


            {/*<div>
                <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
                    debugger
                return <div key={key} className={styles.contact}>
                    <b>{key}: <Field name={"fullName." + key} copmonent={Input} placeholder={key}/></b>
                </div>
            })}
            </div>*/}
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<PropsType>({form: "edit-profile"})(ProfileDataForm)

export default ProfileDataFormReduxForm