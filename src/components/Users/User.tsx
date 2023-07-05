import s from "./Users.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
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
              <div>
                  <h4>{user.name}</h4>
                  <p>{user.status}</p>
              </div>
              <div>
                  <p>{"u.location.city"}</p>
                  <p>{"u.location.country"}</p>
              </div>
          </div>
      </div>
  )
}