


import instanceBaseurl from './../../config/Baseurl';
export async function createCommandService(id, data) {
    try {
        const response = await instanceBaseurl.put(`/blog/commandcreate/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function deleteCommandService(id, data) {
    try {
        const response = await instanceBaseurl.post(`/blog/commandelete/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}
