import React from 'react';
import {WrappedFieldProps} from "redux-form";
import s from './FormsControls.module.css';


interface TextareaProps extends WrappedFieldProps {
    [key: string]: any; // можно добавить дополнительные параметры через rest-оператор
}

const FormControl: React.FC<TextareaProps> = ({ children,  meta}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    );
}

export const Textarea: React.FC<TextareaProps> = ({input, children,  meta, ...props}) => {
    return <FormControl meta={meta} input={input}><textarea {...input} {...props}/> </FormControl>
    /*const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    );*/
};

export const Input: React.FC<TextareaProps> = ({input, children, meta, ...props}) => {
    return <FormControl meta={meta} input={input}><input {...input} {...props}/> </FormControl>
    /*const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span className={s.error}>{meta.error}</span>}
        </div>
    );*/
};