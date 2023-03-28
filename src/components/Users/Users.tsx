import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPageType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";


type UsersPropsType = {
    usersPage: UsersPageType
    followUser: (id: string)=>void
    unfollowUser: (id: string)=>void
    setCurrentPage: (currentPage: number)=>void
    onPageChanged: (pageNumber: number) => void
}
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                <div>
                    {pages.map((p, index) => {
                        const pageStyle = s.page + ' ' + ((p === props.usersPage.currentPage) ? s.selectedPage : '');
                        return <span key={index} onClick={()=>props.onPageChanged(p)} className={pageStyle}>{p + ' '}</span>
                    })}
                </div>
                {props.usersPage.usersData.map(u => {
                    return (
                        <div key={u.id} className={s.user}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={s.avatar}/>
                                </NavLink>
                                {u.followed
                                    ? <button className={s.followBtn} onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "aef60876-afa6-4ce2-873f-4c0463c9c0ac"
                                            }
                                        })
                                            .then(response => {
                                                response.data.resultCode === 0 && props.unfollowUser(u.id)
                                            })
                                    }}>UNFOLLOW</button>
                                    : <button className={s.followBtn} onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "aef60876-afa6-4ce2-873f-4c0463c9c0ac"
                                            }
                                        })
                                            .then(response => {
                                                response.data.resultCode === 0 && props.followUser(u.id)
                                            })
                                    }}>FOLLOW</button>}
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
