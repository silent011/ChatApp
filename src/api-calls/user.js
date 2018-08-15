import { mainUrl, userRoute, registerRoute, DefaultJsonHeader,
         onlineRoute } from './apiUrls'

export const registerUser = (user) => {
    return fetch(mainUrl + userRoute + registerRoute, {
        method: "POST",
        headers: DefaultJsonHeader,
        body: JSON.stringify(user)
    })
}

export const fetchOnlineUsers = () => {
    return fetch(mainUrl + userRoute + onlineRoute)
}
