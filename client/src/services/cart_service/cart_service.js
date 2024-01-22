
import instanceBaseurl from './../../config/Baseurl';
export async function cartCreateService(data) {
    try {
        const response = await instanceBaseurl.post(`/cart/create`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function getCartService(data) {
    try {
        const response = await instanceBaseurl.get(`/cart/get`);
        return response.data;
    } catch (err) {
        throw err;
    }
}



export async function deleteCartService(id) {
    try {
        const response = await instanceBaseurl.delete(`/cart/delete/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function updatequantityCartService(id) {
    try {
        const response = await instanceBaseurl.put(`/cart/updateinc/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function updatequantityDecCartService(id) {
    try {
        const response = await instanceBaseurl.put(`/cart/updatedec/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}