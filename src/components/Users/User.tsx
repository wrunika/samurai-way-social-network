import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import myMind from "../../assets/images/mind.png";
import React from "react";
import {UserDataType} from "../../redux/users-reducer";


type UserPropsType = {
    user: UserDataType
    followingInProgress: number[]
    follow: (userId: number)=>void
    unfollow: (userId: number)=>void
}
export const User = ({user, unfollow, follow, followingInProgress}: UserPropsType) => {
  return(
      <div className={s.userWrapper}>
          <div className={s.user}>
              <div>
                  <NavLink to={'/profile/' + user.id}>
                      <img src={user.photos.small ? user.photos.small : userPhoto} alt="avatar" className={s.avatar}/>
                  </NavLink>
                  {user.followed
                      ? <button disabled={followingInProgress.some(id => id === user.id)} className={s.followBtn}
                                onClick={() => {unfollow(user.id)}}>
                          UNFOLLOW</button>

                      : <button disabled={followingInProgress.some(id => id === user.id)} className={s.followBtn}
                                onClick={() => {follow(user.id)}}>
                          FOLLOW</button>}
              </div>
              <div className={s.userInfo}>
                  <h4>{user.name}</h4>
                  <p><img className={s.statusIcon} src={myMind} alt={'status'}/>{user.status}</p>
              </div>
          </div>
      </div>
  )
}