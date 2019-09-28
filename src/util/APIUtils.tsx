import {API_BASE_URL, ACCESS_TOKEN} from '../constants';
import axios from 'axios';

const request = (options: any) => {
    const headers: IHeaders = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    };

    if (localStorage.getItem(ACCESS_TOKEN)) {
        headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
    }

    return axios(Object.assign({}, options, {headers: headers}));
};

export const login = (loginRequest: ILoginRequest) => {
    return request({
        url: `${API_BASE_URL}/api/auth/login`,
        method: 'POST',
        data: loginRequest
    });
};

export const register = (registerRequest: IRegisterRequest) => {
    return request({
        url: `${API_BASE_URL}/api/auth/register`,
        method: 'POST',
        data: registerRequest
    });
};

export const getCurrentUser = () => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: `${API_BASE_URL}/api/users/me`,
        method: 'GET'
    });
};

export const getUserProfile = (username: string) => {
    return request({
        url: `${API_BASE_URL}/api/users/${username}`,
        method: 'GET'
    });
};

export const getMonthPremieres = (year: number, month: number) => {
    return request({
        url: `${API_BASE_URL}/api/games/monthPremieres?year=${year}&month=${month}`,
        method: 'GET'
    })
};

export interface IRegisterRequest {
    username: string,
    email: string,
    password: string
}

export interface ILoginRequest {
    usernameOrEmail: string,
    password: string
}

interface IHeaders {
    'Content-Type': string,
    'Access-Control-Allow-Origin': string,
    Authorization?: string
}