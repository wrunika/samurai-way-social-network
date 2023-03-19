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
}

let initialState = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
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
            }
        default:
            return state;
    }
}

export const followAC = (id: string) => {
    return {
        type: "FOLLOW-USER",
        id
    } as const
}
export const unfollowAC = (id: string) => {
    return {
        type: "UNFOLLOW-USER",
        id
    } as const
}

export const setUsersAC = (users: UserDataType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsersCount
    } as const
}