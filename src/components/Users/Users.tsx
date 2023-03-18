import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from "./../../assets/images/user.png";
import {UsersPageType} from "../../redux/users-reducer";



export class Users extends React.Component<UsersPropsType, UsersPageType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return (
            <div>
                {this.props.usersPage.usersData.map(u => {
                    return (
                        <div key={u.id} className={s.user}>
                            <div>
                                <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={s.avatar}/>
                                {u.followed
                                    ? <button className={s.followBtn} onClick={() => {this.props.unfollowUser(u.id)}}>UNFOLLOW</button>
                                    : <button className={s.followBtn} onClick={() => {this.props.followUser(u.id)}}>FOLLOW</button>}
                            </div>
                            <div className={s.userInfo}>
                                <div>
                                    <h4>{u.name}</h4>
                                    <p>{u.status}</p>
                                </div>
                                <div>
                                    <p>{"u.location.city"}</p>
                                    <p>{"u.location.country"}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}




















/*
export const Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.usersPage.usersData.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items)
                })
        }
    }
    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {props.usersPage.usersData.map(u => {
                return (
                    <div key={u.id} className={s.user}>
                        <div>
                            <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={s.avatar}/>
                            {u.followed
                                ? <button className={s.followBtn} onClick={() => {props.unfollowUser(u.id)}}>UNFOLLOW</button>
                                : <button className={s.followBtn} onClick={() => {props.followUser(u.id)}}>FOLLOW</button>}
                        </div>
                        <div className={s.userInfo}>
                            <div>
                                <h4>{u.name}</h4>
                                <p>{u.status}</p>
                            </div>
                            <div>
                                <p>{"u.location.city"}</p>
                                <p>{"u.location.country"}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
*/
