import React from 'react';
import {UserDataType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";
import styles from "./Users.module.css";

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
                    totalItemsCount={props.totalUsersCount}
                    onPageChanged={props.onPageChanged}
                />

                <div className={styles.users}>
                    {props.users.map(u => {
                        return (
                            <User
                                key={u.id}
                                user={u}
                                followingInProgress={props.followingInProgress}
                                follow={props.follow}
                                unfollow={props.unfollow}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
