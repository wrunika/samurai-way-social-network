import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    followUser, getUsersThunkCreator,
    setCurrentPage, setIsFetching, setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unfollowUser,
    UserDataType,
    UsersPageType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from "../../api/api";



type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    followUser: (id: number)=>void
    unfollowUser: (id: number)=>void
    setUsers: (users: UserDataType[])=> void
    setCurrentPage: (currentPage: number)=>void
    //setTotalUsersCount: (totalUsersCount: number)=>void
    setIsFetching: (isFetching: boolean)=>void
    toggleFollowingProgress: (isFetching: boolean, userId: number)=>void
    getUsersThunkCreator: (currentPage: number, pageSize:number) => void

}
//export type UsersContainerPropsType = MapStateToPropsType & {followUser: any, unfollowUser:any, setUsers:any, setCurrentPage: any, setTotalUsersCount:any, setIsFetching:any}
export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UsersContainerPropsType, UsersPageType> {
//class UsersContainer extends React.Component<any, UsersPageType> {
    componentDidMount() {
        console.log(this.props)
        /*this.props.setIsFetching(true);
        usersAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })*/
        this.props.getUsersThunkCreator(this.props.usersPage.currentPage, this.props.usersPage.pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.usersPage.pageSize);
        /*this.props.setCurrentPage(pageNumber);
        this.props.setIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.usersPage.pageSize)
            .then(data => {
                this.props.setIsFetching(false);
                this.props.setUsers(data.items);
            })*/
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
            toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {followUser, unfollowUser, setUsers, setCurrentPage, setIsFetching, toggleFollowingProgress, getUsersThunkCreator}) (UsersContainer);
//export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toggleFollowingProgress, getUsersThunkCreator}) (UsersContainer);


//export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (UsersAPIComponent)