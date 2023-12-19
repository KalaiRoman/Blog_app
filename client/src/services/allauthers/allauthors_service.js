


import instanceBaseurl from './../../config/Baseurl';
export async function allusersService() {
    try {
        const response = await instanceBaseurl.get(`/auth/alluser`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

