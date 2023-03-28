import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "aef60876-afa6-4ce2-873f-4c0463c9c0ac"
    }
})

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize:number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}