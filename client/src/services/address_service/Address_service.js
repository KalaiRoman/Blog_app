
import instanceBaseurl from './../../config/Baseurl';
export async function CreateAddressService(data) {
    try {
        const response = await instanceBaseurl.post(`/address/create`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}



export async function getAddressService() {
    try {
        const response = await instanceBaseurl.get(`/address/getall/`);
        return response.data;
    } catch (err) {
        throw err;
    }
}
export async function singleDddressService(id) {
    try {
        const response = await instanceBaseurl.get(`/address/single/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}



export async function editDddressService(id, data) {
    try {
        const response = await instanceBaseurl.put(`/address/update/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function deleteDddressService(id) {
    try {
        const response = await instanceBaseurl.delete(`/address/delete/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}