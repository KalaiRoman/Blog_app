import { CreateAddressService, deleteDddressService, editDddressService, getAddressService, singleDddressService } from "../../services/address_service/Address_service"
import { AddressRequest, AddressSuccess, SingleAddressSuccess } from "../reducer/Address_reducer";
import { ToastSuccess } from './../../middleware/Toast_action';


export const AddressCreateActions = (data, navigtate) => async (dispatch) => {
    try {
        const response = await CreateAddressService(data);
        if (response) {
            ToastSuccess(response?.message);
            setTimeout(() => {
                navigtate("/ecommerce/cart")
            }, 400);
        }
    } catch (error) {
        console.log(error)
    }
}


export const currentUserAddress = () => async (dispatch) => {
    dispatch(AddressRequest());
    try {
        const response = await getAddressService();
        if (response) {
            dispatch(AddressSuccess(response?.data));
        }
    } catch (error) {
        console.log(error)
    }
}


export const editcurrentUserAddress = (id, data, navigate) => async (dispatch) => {
    dispatch(AddressRequest());
    try {
        const response = await editDddressService(id, data);
        if (response) {
            ToastSuccess(response?.message);
            navigate("/ecommerce/cart")
        }
    } catch (error) {
        console.log(error)
    }
}


export const currentUserDeleteAddress = (id) => async (dispatch) => {
    dispatch(AddressRequest());
    try {
        const response = await deleteDddressService(id);
        if (response) {
            dispatch(AddressSuccess(response?.data));
            dispatch(currentUserAddress());
        }
    } catch (error) {
        console.log(error)
    }
}

export const currentUsersingleAddressAction = (id) => async (dispatch) => {
    try {
        const response = await singleDddressService(id);
        if (response) {
            dispatch(SingleAddressSuccess(response?.data));
        }
    } catch (error) {
        console.log(error)
    }
}