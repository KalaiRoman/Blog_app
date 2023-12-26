import instanceBaseurl from "../../config/Baseurl";

export async function createfavortService(data) {
    try {
        const response = await instanceBaseurl.post(`/favort/create`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function allfavortService(data) {
    try {
        const response = await instanceBaseurl.get(`/favort/all`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function deletefavortService(id) {
    try {
        const response = await instanceBaseurl.delete(`/favort/delete/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}