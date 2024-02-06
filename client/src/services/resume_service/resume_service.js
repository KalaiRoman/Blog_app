import instanceBaseurl from "../../config/Baseurl";

export async function createResumeService(data) {
    try {
        const response = await instanceBaseurl.post(`/resume/create`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function getallResumeService() {
    try {
        const response = await instanceBaseurl.get(`/resume/getall`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function getSingleResumeService(id) {
    try {
        const response = await instanceBaseurl.get(`/resume/get/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function updateallResumeService(id, data) {
    try {
        const response = await instanceBaseurl.put(`/resume/update/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}