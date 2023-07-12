import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import s from './../common/FormsControls/FormsControls.module.css';


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captchaUrl: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginPropsType> & LoginPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={'Login'}
                    name={'login'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    validate={[required]}
                    type={'password'}
                />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember me
            </div>

            {captchaUrl && <img alt={''} src={captchaUrl}/>}
            {captchaUrl && <Field placeholder={'Symbols from image'} name={'captcha'} component={Input} validate={[required]} />}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginPropsType>({
    form: 'login'
})(LoginForm)

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.url
    }
}
const Login = (props: LoginPropsType) => {
//const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
        props.login && props.login(formData.login, formData.password, formData.rememberMe, formData.captchaUrl)
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>

    )
}

type MapDispatchToPropsType = {
    login?: (email: string, password: string, rememberMe: boolean, captchaUrl: string) => void
}
type MapStatePropsType = {
    isAuth?: boolean
    captchaUrl: string
}
type LoginPropsType = MapStatePropsType & MapDispatchToPropsType


export default connect(mapStateToProps, {login})(Login);