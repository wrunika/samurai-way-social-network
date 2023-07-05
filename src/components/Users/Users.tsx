import React from 'react';
import {UserDataType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


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

    return (
        <div>
            <div>
                <Paginator
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    totalUsersCount={props.totalUsersCount}
                    onPageChanged={props.onPageChanged}
                />

                {props.users.map(u => {
                    return (
                        <User key={u.id} user={u} followingInProgress={props.followingInProgress} follow={props.follow} unfollow={props.unfollow} />
                        /*<div key={u.id} className={s.user}>
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
                        </div>*/
                    )
                })}
            </div>
        </div>
    );
}
