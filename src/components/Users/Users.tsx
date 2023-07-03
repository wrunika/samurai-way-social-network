import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserDataType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type UsersPropsType = {
    users: UserDataType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    followingInProgress: number[]
    follow: (userId: number)=>void
    unfollow: (userId: number)=>void
    setCurrentPage: (currentPage: number)=>void
    onPageChanged: (pageNumber: number) => void
}
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    console.log(props)
    return (
        <div>
            <div>
                <div>
                    {pages.map((p, index) => {
                        const pageStyle = s.page + ' ' + ((p === props.currentPage) ? s.selectedPage : '');
                        return <span key={index} onClick={()=>props.onPageChanged(p)} className={pageStyle}>{p + ' '}</span>
                    })}
                </div>
                {props.users.map(u => {
                    return (
                        <div key={u.id} className={s.user}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={s.avatar}/>
                                </NavLink>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followBtn}
                                              onClick={() => {props.unfollow(u.id)}}>
                                        UNFOLLOW</button>

                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followBtn}
                                              onClick={() => {props.follow(u.id)}}>
                                        FOLLOW</button>}
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
        </div>
    );
}
