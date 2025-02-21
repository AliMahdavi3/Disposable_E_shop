import httpService from "./httpService"

export const getCategoriesService = () => {
    return httpService('/api/products/categories', 'get');
}

export const getProductsByCategoryService = (category) => {
    return httpService(`/api/products/category/${category}`, 'get');
}

export const getSearchResultService = (query) => {
    return httpService(`/api/search?term=${query}`, 'get');
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

export const getBirthDayProductsService = () => {
    return httpService('/api/birth-day-products', 'get');
}

export const getDisposableProductsService = () => {
    return httpService('/api/disposable-products', 'get');
}

export const getTopSellingProductsService = () => {
    return httpService('/api/top-selling-products', 'get');
}