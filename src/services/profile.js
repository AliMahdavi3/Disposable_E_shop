import httpService from "./httpService"


export const getUserService = () => {
    return httpService('/auth/user', 'get');
}

export const getFavoritesService = () => {
    return httpService('/auth/user/favorites', 'get');
}

export const editUserInfoService = (userId, data) => {
    return httpService(`/auth/user/${userId}`, 'put', data);
}

export const changePasswordService = (userId, data) => {
    return httpService(`/auth/changePassword/${userId}`, 'put', data);
}

export const deleteFavoritesService = (productId) => {
    return httpService(`/auth/user/favorites/${productId}`, 'delete');
}
