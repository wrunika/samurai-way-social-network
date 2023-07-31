import React, {ChangeEvent} from 'react';
import styles from "./ProfileInfo.module.css";
import edit from "./../../../../assets/images/edit.png";


type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<PropsType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<any>, snapshot?: any) {
        //debugger
        prevProps.status !== this.props.status && this.setState({
            status: this.props.status
        })
    }

    render() {
        return (
            <div className={styles.statusBlock}>
                {!this.state.editMode
                    ? <div className={styles.statusWrapper}>
                        <span className={styles.statusTitle}>What`s on your mind: </span>
                        <span className={styles.statusBody} onDoubleClick={this.activateEditMode }>{this.props.status || <img src={edit} className={styles.editStatus} alt={'edit'} />}</span>
                    </div>
                    : <div>
                        <span className={styles.statusTitle}>What`s on your mind: </span>
                        <input className={styles.statusInput} onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode} value={this.state.status}/>
                    </div>
                }
            </div>
        );
    }
}
