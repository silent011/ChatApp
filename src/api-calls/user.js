import { mainUrl, userRoute, DefaultJsonHeader } from './apiUrls'

export const registerUser = (user) => {
    return fetch(mainUrl + userRoute, {
        method: "POST",
        headers: DefaultJsonHeader,
        body: JSON.stringify(user)
    })
}

