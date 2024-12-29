import httpService from "./httpService"

export const getAllProductsService = () => {
    return httpService('/api/products', 'get');
}

export const getNewestProductsService = () => {
    return httpService('/api/newest-products', 'get');
}
