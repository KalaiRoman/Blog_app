import { allfavortService, createfavortService, deletefavortService } from "../../services/favorts_service/favort_service"
import { FavortsRequest, FavortsSuccess } from "../reducer/Allfavorts_reducer";
import { ToastSuccess } from './../../middleware/Toast_action';
import { GetProductActions } from "./CreateProductActions";
import { SingleuserActionData } from "./SingleuserAction";

export const FavortActionData = (data) => async (dispatch) => {
    try {

        const response = await createfavortService(data);
        if (response) {
            dispatch(SingleuserActionData())
            ToastSuccess(response?.message);
        }
    } catch (error) {

    }
}

export const FavortActionDatauser = (data) => async (dispatch) => {
    try {

        const response = await createfavortService(data);
        if (response) {
            dispatch(SingleuserActionData())
            dispatch(GetProductActions())
            ToastSuccess(response?.message);
        }
    } catch (error) {

    }
}

export const FavortAllActionData = () => async (dispatch) => {
    dispatch(FavortsRequest());
    try {
        const response = await allfavortService();
        if (response) {
            dispatch(FavortsSuccess(response?.data));
        }

    } catch (error) {
        console.log(error)
    }
}


export const FavortRemoveActionData = (id) => async (dispatch) => {
    try {
        const response = await deletefavortService(id);
        if (response) {
            ToastSuccess(response?.message);
        }

    } catch (error) {
        console.log(error)
    }
}