import React from 'react';
import {UsersContainerPropsType} from "./UsersContainer";
import axios from "axios";
import {UsersPageType} from "../../redux/users-reducer";
import {Users} from "./Users";



class UsersAPIComponent extends React.Component<UsersContainerPropsType, UsersPageType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }
    /*render() {
        return <Users
            usersPage={this.props.usersPage}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            setCurrentPage={this.props.setCurrentPage}
            onPageChanged={this.onPageChanged}
        />
    }*/
}











        //from render
        /*let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map((p, index) => {
                        const pageStyle = s.page + ' ' + ((p === this.props.usersPage.currentPage) ? s.selectedPage : '');
                        return <span key={index} onClick={()=>this.onPageChanged(p)} className={pageStyle}>{p + ' '}</span>
                    })}
                </div>
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
        )*/





















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
