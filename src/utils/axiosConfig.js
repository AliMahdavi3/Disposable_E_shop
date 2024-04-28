import axios from "axios";


export const setupAxiosConfig = () => {
    const token = localStorage.getItem('token');

    if(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}