import httpService from "./httpService"

export const registerService = (data) => {
    return httpService('/auth/register', 'post', data)
}

export const loginWithPhoneService = (phone, password) => {
    const data = { phone, password };
    return httpService('/auth/login', 'post', data);
}

export const loginWithEmailService = (email, password) => {
    const data = { email, password };
    return httpService('/auth/login', 'post', data);
}