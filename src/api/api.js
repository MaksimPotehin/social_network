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

export const profileApi = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    setPhoto (photoFile) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfileData (formData) {
        return instance.put(`profile`, {formData})
    },
    getStatus (userId) {
        return instance.get(`/profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status:status})
    }
}

export const authApi = {
    me(){
        return instance.get(`auth/me`,)
            .then(response => response.data)
    },
    login(email, password, rememberMe){
        return instance.post('/auth/login', {email, password, rememberMe})
    },
    logout(){
        return instance.delete('/auth/login')
    }
}