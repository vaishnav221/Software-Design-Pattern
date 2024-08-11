import axios from 'axios';

const baseURL = 'http://localhost:8080/api';

const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem('token');
        if(token) {
            config.headers.Authorization = Bearer `${token}`;
        }

        return config;
    }, (error) => {
        return Promise.reject(error);
    }

);

const LoginData = (email, password) => axiosInstance.post('/v1/auth/authenticate', {email, password});

export {axiosInstance, LoginData}