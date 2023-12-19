
import instanceBaseurl from './../../config/Baseurl';

export async function loginUer(data) {
    try {
        const response = await instanceBaseurl.post(`/auth/login`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function registerUser(data) {
    try {
        const response = await instanceBaseurl.post(`/auth/register`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function singleUserService(data) {
    try {
        const response = await instanceBaseurl.get(`/auth/get/${data}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}