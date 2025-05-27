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

// Discount section
export const applyDiscountService = (data) => {
    return httpService('/api/apply-discount', 'post', data);
}

// Order services
export const createOrderService = (data) => {
    return httpService('/api/create-order', 'post', data);
}

export const getUserOrdersService = () => {
    return httpService('/api/orders', 'get');
}

export const getCheckoutService = (orderId) => {
    return httpService(`/api/checkout/${orderId}`, 'get');
}

export const getPaymentRequestService = (orderId) => {
    return httpService(`/api/payment-request/${orderId}`, 'get');
}

export const getPaymentConfirmationService = ({ Authority, Status }) => {
    console.log('Sending API request:', { Authority, Status });
    return httpService(`/api/payment-confirmation?Authority=${Authority}&Status=${Status}`, 'get');
}