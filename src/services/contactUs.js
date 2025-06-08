import httpService from "./httpService";

const createFormData = (data) => {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('subject', data.subject);
    formData.append('description', data.description);
    if (data.image && data.image.length > 0) {
        data.image.forEach(file => {
            formData.append('image', file);
        });
    }
    return formData;
}

export const getUserService = () => {
    return httpService('/auth/user', 'get');
}

export const createNewTicketService = (data) => {
    const formData = createFormData(data);
    return httpService('/api/ticket', 'post', formData, 'multipart/form-data');
}

export const getUserAllTicketsService = () => {
    return httpService('/api/user-tickets', 'get');
}

export const getSingleTicketService = (ticketId) => {
    return httpService(`/api/tickets/${ticketId}`, 'get');
}

export const respondToTicketService = (ticketId, data) => {
    return httpService(`/api/tickets/${ticketId}/respond`, 'post', data);
};