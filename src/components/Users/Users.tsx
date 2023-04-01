import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersPageType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    usersPage: UsersPageType
    followUser: (id: number)=>void
    unfollowUser: (id: number)=>void
    setCurrentPage: (currentPage: number)=>void
    onPageChanged: (pageNumber: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number)=>void
}
export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.usersPage.totalUsersCount / props.usersPage.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    console.log(props.usersPage)
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
                                    ? <button disabled={props.usersPage.followingInProgress.some(id => id === u.id)} className={s.followBtn} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                        usersAPI.unfollowUser(u.id)
                                            .then(data => {
                                                console.log(data)
                                                data.resultCode === 0 && props.unfollowUser(u.id);
                                                props.toggleFollowingProgress(false, u.id);
                                            })
                                    }}>UNFOLLOW</button>

                                    : <button disabled={props.usersPage.followingInProgress.some(id => id === u.id)} className={s.followBtn} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                        usersAPI.followUser(u.id)
                                            .then(data => {
                                                data.resultCode === 0 && props.followUser(u.id);
                                                props.toggleFollowingProgress(false, u.id);
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
