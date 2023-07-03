import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    requestUsers,
    setCurrentPage, toggleFollowingProgress, unfollow, UserDataType,
    UsersPageType
} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize, getTotalUsersCount,
    getUsersData
} from "../../redux/users-selectors";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";



type MapStateToPropsType = {
    users: UserDataType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    followingInProgress: number[]
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (id: number)=>void
    unfollow: (id: number)=>void
    setCurrentPage: (currentPage: number)=>void
    toggleFollowingProgress: (isFetching: boolean, userId: number)=>void
    getUsers: (currentPage: number, pageSize:number) => void

}

export type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UsersContainerPropsType, UsersPageType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            followingInProgress={this.props.followingInProgress}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            setCurrentPage={this.props.setCurrentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
            </>
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
      users: getUsersData(state),
      currentPage: getCurrentPage(state),
      followingInProgress: getFollowingProgress(state),
      isFetching: getIsFetching(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state)
  }
}


export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
        {setCurrentPage, toggleFollowingProgress, getUsers: requestUsers, follow, unfollow}),
    //withAuthRedirect
) (UsersContainer)






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


//export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {followUser, unfollowUser, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, toggleFollowingProgress, getUsersThunkCreator}) (UsersContainer);


//export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps) (UsersAPIComponent)