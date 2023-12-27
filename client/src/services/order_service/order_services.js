import instanceBaseurl from "../../config/Baseurl";

export async function createOrderService(data) {
    try {
        const response = await instanceBaseurl.post(`/order/create`, data);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function AllOrderService() {
    try {
        const response = await instanceBaseurl.get(`/order/allorders`);
        return response.data;
    } catch (err) {
        throw err;
    }
}


export async function OrderCancelService(id) {
    try {
        const response = await instanceBaseurl.put(`/order/update/${id}`);
        return response.data;
    } catch (err) {
        throw err;
    }
}