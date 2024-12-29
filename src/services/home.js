import httpService from "./httpService"


export const getCategoriesService = () => {
    return httpService('/api/products/categories', 'get');
}

export const getNewestArticlesService = () => {
    return httpService('/api/articles/newest', 'get');
}

export const getMainSliderService = () => {
    return httpService('/api/mainSliders', 'get');
}

export const getBannersService = () => {
    return httpService('/api/banners', 'get');
}
