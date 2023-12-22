


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

export async function getSingleUserBlogService(data) {
    try {
        const response = await instanceBaseurl.get(`/blog/allblogs/currentuser/${data}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function Blogsingleservice(data) {
    try {
        const response = await instanceBaseurl.get(`/blog/single/${data}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function editBlogsingleservice(id, data) {
    try {
        const response = await instanceBaseurl.put(`/blog/update/${id}`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function deleteBlogsingleservice(id) {
    try {
        const response = await instanceBaseurl.delete(`/blog/delete/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function filterBlogservice(id) {
    try {
        const response = await instanceBaseurl.get(`/blog/filter/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}