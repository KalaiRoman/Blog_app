import instanceBaseurl from "../../config/Baseurl";

export async function createproductService(data) {
    try {
        const response = await instanceBaseurl.post(`/product/create`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function getproductServices(data) {
    try {
        const response = await instanceBaseurl.get(`/product/getall`);
        return response.data;
    } catch (err) {
        throw err;
    }
}

export async function getCurrentsingleproductServices(id) {
    try {
        const response = await instanceBaseurl.get(`/product/getsingle/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}