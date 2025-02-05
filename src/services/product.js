import httpService from "./httpService"

export const getAllProductsService = () => {
    return httpService('/api/products', 'get');
}

export const getNewestProductsService = () => {
    return httpService('/api/newest-products', 'get');
}

export const getSingleProductService = (productId) => {
    return httpService(`/api/products/${productId}`, 'get');
}

export const getProductCommentService = (productId) => {
    return httpService(`/api/products/${productId}/comments`, 'get');
}

export const getRelatedProductsService = (productId) => {
    return httpService(`/api/products/${productId}/related`, 'get');
}

export const addProductToFavoritesService = (productId) => {
    return httpService(`/auth/user/favorites`, 'post', {
        productId,
    });
}

export const addToCartService = (productId, quantity) => {
    return httpService('/api/cart', 'post', {
        productId,
        quantity,
    });
}

export const createProductCommentService = (productId, commentData) => {
    return httpService(`/api/products/${productId}/comments`, 'post', commentData);
}
