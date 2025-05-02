import httpService from "./httpService";

export const getCartItemsService = () => {
    return httpService('/api/cart', 'get');
}

export const getCartCountService = () => {
    return httpService('/api/cart/count', 'get');
}

export const updateCartItemQuantityService = (productId, data) => {
    return httpService(`/api/cart/${productId}`, 'put', data);
}

export const deleteItemsFromCartService = (productId) => {
    return httpService(`/api/cart/${productId}`, 'delete');
}

// Order services

export const createOrderService = (data) => {
    return httpService('/api/create-order', 'post', data);
}

export const getCheckoutService = (orderId) => {
    return httpService(`/api/checkout/${orderId}`, 'get');
}

export const getPaymentRequestService = (orderId) => {
    return httpService(`/api/payment-request/${orderId}`, 'get');
}

export const getConfirmPaymentService = (data) => {
    return httpService('/api/payment-confirmation', 'get', data);
}