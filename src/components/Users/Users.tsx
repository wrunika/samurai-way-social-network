import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from "./../../assets/images/user.png"

export const Users = (props: UsersPropsType) => {
    if (props.usersPage.usersData.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
        /*props.setUsers([
            {id: "1", avatarUrl: "https://avatars.mds.yandex.net/i?id=61cf537c3f7ba8eeae52c1b6cc036dd4c8b2b640-9100256-images-thumbs&n=13", followed: false, fullName: "Greg F.", status: "It is my first happy day.", location: {country: "Poland", city: "Gdansk"}},
            {id: "2", avatarUrl: "https://avatars.mds.yandex.net/i?id=a4eafe38b4044795c5576f614794a145b4d5aedc-5876581-images-thumbs&n=13", followed: true, fullName: "Lora M.", status: "Hey!", location: {country: "Germany", city: "Bremen"}},
            {id: "3", avatarUrl: "https://avatars.mds.yandex.net/i?id=2e07ff0cc461213fd3f58b3727c4e346afec656d-8487535-images-thumbs&n=13", followed: false, fullName: "Alex Th.", status: "I like it.", location: {country: "Sweden", city: "Geteborg"}},
            {id: "4", avatarUrl: "https://avatars.mds.yandex.net/i?id=f63b4ebbdd432cca6df3863d3d4a03ee01ae5a96-7551603-images-thumbs&n=13", followed: false, fullName: "Wojtek D.", status: "Great!", location: {country: "Poland", city: "Poznan"}},
        ])*/
    }
    return (
        <div>
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
