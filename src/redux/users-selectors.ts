import {AppStateType} from "./redux-store";

export const getUsersData = (state: AppStateType) => {
  return state.usersPage.usersData
}

export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getFollowingProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}

export const getIsFetching = (state: AppStateType) => {
    return state.usersPage.isFetching
}