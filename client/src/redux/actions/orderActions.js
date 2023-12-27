import { ToastError, ToastSuccess } from "../../middleware/Toast_action";
import { AllOrderService, OrderCancelService, createOrderService } from "../../services/order_service/order_services";
import { OrdersFail, OrdersRequest, OrdersSuccess } from "../reducer/Orders_reducer";

export const OrderAction = (data) => async (dispatch) => {
    try {
        const response = await createOrderService(data);
        if (response) {
            ToastSuccess(response?.message);
        }
    } catch (error) {
        console.log(error)
    }
}


export const OrderAllDatasAction = () => async (dispatch) => {
    dispatch(OrdersRequest());
    try {
        const response = await AllOrderService();
        if (response) {
            dispatch(OrdersSuccess(response?.data));
        }
    } catch (error) {
        dispatch(OrdersFail("error get orders"))
    }
}


export const OrderUpdatesAction = (id) => async (dispatch) => {
    try {
        const response = await OrderCancelService(id);
        if (response) {
            ToastSuccess("Order Canceled Successfully")
            dispatch(OrderAllDatasAction());
        }
    } catch (error) {
        dispatch(OrdersFail("error get orders"))
    }
}