import {ActionsTypes} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

type LocationType = {
    country: string
    city: string
}
export type UserDataType = {
    name: string
    //id: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
    location?: LocationType
}
export type UsersPageType = {
    usersData: UserDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypes): UsersPageType => {
    switch (action.type) {
        case "FOLLOW-USER":
            return {
                ...state,
                usersData: [...state.usersData.map(u=> (u.id === action.id) ? {...u, followed: true} : u )]
            };
        case "UNFOLLOW-USER":
            return {
                ...state,
                usersData: [...state.usersData.map(u=> (u.id === action.id) ? {...u, followed: false} : u )]
            };
        case "SET-USERS":
            return {
                ...state,
                usersData: [...action.users]
            };
        case "SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            };
        case "SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case "SET-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            };
        case "TOGGLE-FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId] : state.followingInProgress.filter(id => id != action.userId)
            };
        default:
            return state;
    }
}

export const followUser = (id: number) => {
    return {
        type: "FOLLOW-USER",
        id
    } as const
}
export const unfollowUser = (id: number) => {
    return {
        type: "UNFOLLOW-USER",
        id
    } as const
}

export const setUsers = (users: UserDataType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const
}

export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "SET-IS-FETCHING",
        isFetching
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-FOLLOWING-PROGRESS",
        isFetching,
        userId
    } as const
}

export const requestUsers = (page: number, pageSize:number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));

    usersAPI.getUsers(page, pageSize)
        .then(data => {
            //dispatch(setCurrentPage(page))
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
}

export const follow = (userId:number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.followUser(userId)
        .then(data => {
            data.resultCode === 0 && dispatch(followUser(userId));
            dispatch(toggleFollowingProgress(false, userId));
        })
}

export const unfollow = (userId:number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersAPI.unfollowUser(userId)
        .then(data => {
            data.resultCode === 0 && dispatch(unfollowUser(userId));
            dispatch(toggleFollowingProgress(false, userId));
        })
}