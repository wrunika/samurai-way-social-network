import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersDataType, UsersPageType} from "../../redux/users-reducer";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    usersPage: UsersPageType
}
type MapDispatchToPropsType = {
    followUser: (id: string)=>void
    unfollowUser: (id: string)=>void
    setUsers: (users: UsersDataType[])=> void
}
export type UsersPropsType = {
    usersPage: UsersPageType
    followUser: (id: string)=>void
    unfollowUser: (id: string)=>void
    setUsers: (users: UsersDataType[])=> void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    usersPage: state.usersPage
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        followUser: (id) => {
            dispatch(followAC(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)