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
        case "users/FOLLOW-USER":
            return {
                ...state,
                usersData: [...state.usersData.map(u=> (u.id === action.id) ? {...u, followed: true} : u )]
            };
        case "users/UNFOLLOW-USER":
            return {
                ...state,
                usersData: [...state.usersData.map(u=> (u.id === action.id) ? {...u, followed: false} : u )]
            };
        case "users/SET-USERS":
            return {
                ...state,
                usersData: [...action.users]
            };
        case "users/SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            };
        case "users/SET-TOTAL-USERS-COUNT":
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        case "users/SET-IS-FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            };
        case "users/TOGGLE-FOLLOWING-PROGRESS":
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
        type: "users/FOLLOW-USER",
        id
    } as const
}
export const unfollowUser = (id: number) => {
    return {
        type: "users/UNFOLLOW-USER",
        id
    } as const
}

export const setUsers = (users: UserDataType[]) => {
    return {
        type: "users/SET-USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "users/SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: "users/SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const
}

export const setIsFetching = (isFetching: boolean) => {
    return {
        type: "users/SET-IS-FETCHING",
        isFetching
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "users/TOGGLE-FOLLOWING-PROGRESS",
        isFetching,
        userId
    } as const
}

export const requestUsers = (page: number, pageSize:number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(setCurrentPage(page));

    const data = await usersAPI.getUsers(page, pageSize)

            //dispatch(setCurrentPage(page))
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

}

const followUnfollowFlow = async (dispatch: Dispatch, userId:number, apiMethod: any, actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId)

    data.resultCode === 0 && dispatch(actionCreator(userId));
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId:number) => async (dispatch: Dispatch) => {
    const apiMethod = usersAPI.followUser.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, apiMethod, followUser);

    /*dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId)

    data.resultCode === 0 && dispatch(actionCreator(userId));
    dispatch(toggleFollowingProgress(false, userId));*/
}

export const unfollow = (userId:number) => async (dispatch: Dispatch) => {
    const apiMethod = usersAPI.unfollowUser.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowUser);

    /*dispatch(toggleFollowingProgress(true, userId));
    const data = await apiMethod(userId)

    data.resultCode === 0 && dispatch(actionCreator(userId));
    dispatch(toggleFollowingProgress(false, userId));*/
}