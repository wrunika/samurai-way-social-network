import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followUser,
    setCurrentPage, setIsFetching, setTotalUsersCount,
    setUsers,
    unfollowUser,
    UserDataType,
    UsersPageType
} from "../../redux/users-reducer";
//import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";



type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    followUser: (id: string)=>void
    unfollowUser: (id: string)=>void
    setUsers: (users: UserDataType[])=> void
    setCurrentPage: (currentPage: number)=>void
    setTotalUsersCount: (totalUsersCount: number)=>void
    setIsFetching: (isFetching: boolean)=>void

}
//export type UsersContainerPropsType = MapStateToPropsType & {followUser: any, unfollowUser:any, setUsers:any, setCurrentPage: any, setTotalUsersCount:any, setIsFetching:any}
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UsersContainerPropsType, UsersPageType> {
//class UsersContainer extends React.Component<any, UsersPageType> {
    componentDidMount() {
        console.log(this.props)
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }
    render() {
        return <>
            {this.props.usersPage.isFetching && <Preloader/>}
            <Users
            usersPage={this.props.usersPage}
            followUser={this.props.followUser}
            unfollowUser={this.props.unfollowUser}
            setCurrentPage={this.props.setCurrentPage}
            onPageChanged={this.onPageChanged}
        />
            </>
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    usersPage: state.usersPage
  }
}
/*const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followUser: (id) => {
            dispatch(followAC(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}*/
//export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (UsersContainer);

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching}) (UsersContainer);


//export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (UsersAPIComponent)