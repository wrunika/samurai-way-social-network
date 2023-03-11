import {ActionsTypes} from "./redux-store";

type LocationType = {
    country: string
    city: string
}
export type UsersDataType = {
    id: string
    avatarUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
export type UsersPageType = {
    usersData: UsersDataType[]
}

let initialState = {
    usersData: [
        /*{id: "1", avatarUrl: "https://avatars.mds.yandex.net/i?id=61cf537c3f7ba8eeae52c1b6cc036dd4c8b2b640-9100256-images-thumbs&n=13", followed: false, fullName: "Greg F.", status: "It is my first happy day.", location: {country: "Poland", city: "Gdansk"}},
        {id: "2", avatarUrl: "https://avatars.mds.yandex.net/i?id=a4eafe38b4044795c5576f614794a145b4d5aedc-5876581-images-thumbs&n=13", followed: true, fullName: "Lora M.", status: "Hey!", location: {country: "Germany", city: "Bremen"}},
        {id: "3", avatarUrl: "https://avatars.mds.yandex.net/i?id=2e07ff0cc461213fd3f58b3727c4e346afec656d-8487535-images-thumbs&n=13", followed: false, fullName: "Alex Th.", status: "I like it.", location: {country: "Sweden", city: "Geteborg"}},
        {id: "4", avatarUrl: "https://avatars.mds.yandex.net/i?id=f63b4ebbdd432cca6df3863d3d4a03ee01ae5a96-7551603-images-thumbs&n=13", followed: false, fullName: "Wojtek D.", status: "Great!", location: {country: "Poland", city: "Poznan"}},*/
    ]
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

export const setUsersAC = (users: UsersDataType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}