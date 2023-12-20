


import instanceBaseurl from './../../config/Baseurl';
export async function createBlogService(data) {
    try {
        const response = await instanceBaseurl.post(`/blog/create`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function getBlogService() {
    try {
        const response = await instanceBaseurl.get(`/blog/allblogs`);
        return response.data;
    } catch (err) {
        throw err;
    }
}
