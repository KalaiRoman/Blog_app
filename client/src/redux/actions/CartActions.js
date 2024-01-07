import { cartCreateService, deleteCartService, getCartService } from "../../services/cart_service/cart_service"
import { UsercartRequest, UsercartSuccess } from "../reducer/User_cart_reducer";
import { ToastError, ToastSuccess } from './../../middleware/Toast_action';






export const GetcartActions = () => async (dispatch) => {
    dispatch(UsercartRequest());
    try {
        const response = await getCartService();
        if (response) {
            dispatch(UsercartSuccess(response?.data))
        }
    } catch (error) {
        console.log(error)
    }
}


export const DeletecartActions = (id) => async (dispatch) => {
    try {
        const response = await deleteCartService(id);
        if (response) {
            ToastSuccess(response?.message);
            dispatch(GetcartActions());

        }
    } catch (error) {
        console.log(error)
    }
}

export const AddcartActions = (data) => async (dispatch) => {
    try {
        const response = await cartCreateService(data);

        if (response) {
            ToastSuccess(response?.message);
            dispatch(GetcartActions());
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}