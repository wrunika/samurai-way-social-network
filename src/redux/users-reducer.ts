import {ActionsTypes} from "./redux-store";

type LocationType = {
    country: string
    city: string
}
export type UserDataType = {
    name: string
    id: string
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
    followingInProgress: string[]
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
                //followingInProgress: action.
                //followingInProgress: action.followingInProgress
            };
        default:
            return state;
    }
}

export const followUser = (id: string) => {
    return {
        type: "FOLLOW-USER",
        id
    } as const
}
export const unfollowUser = (id: string) => {
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

export const toggleFollowingProgress = (isFetching: boolean, userId: string) => {
//export const toggleFollowingProgress = (followingInProgress: boolean) => {
    return {
        type: "TOGGLE-FOLLOWING-PROGRESS",
        isFetching,
        userId
    } as const
}