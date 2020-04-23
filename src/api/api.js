import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "401d6721-3ffd-4885-b318-da9979dd55a0"
    },
})




export const usersApi = {
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getUsers (selectedPage = 1, pageSize = 10){
        return instance.get(`users?page=${selectedPage}&count=${pageSize}`)
    },
    getProfile (userId) {
        return instance.get(`profile/${userId}`,)
            .then(response => response.data)
    }
}
export const authApi = {
    me(){
        return instance.get(`auth/me`,)
            .then(response => response.data)
    }
}