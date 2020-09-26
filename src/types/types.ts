export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ContactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
    aboutMe: string | null
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
}