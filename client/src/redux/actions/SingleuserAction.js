import { singleUserService, singleUserServiceUpdate } from "../../services/auth_service/auth_service";
import { SingleuserFail, SingleuserRequest, SingleuserSuccess } from "../reducer/Singleuser_reducer";
import jwt_decode from "jwt-decode";
import { ToastError, ToastSuccess } from './../../middleware/Toast_action';


export const SingleuserActionData = () => async (dispatch) => {

    dispatch(SingleuserRequest());
    try {

        const token = localStorage.getItem("blog_token");
        const final = jwt_decode(token);


        if (final) {
            const response = await singleUserService(final?.id);

            if (response) {
                dispatch(SingleuserSuccess(response?.data));
            }
        }
        else {
            return null;
        }


    } catch (error) {
        dispatch(SingleuserFail(error?.response?.data?.message));

    }
}



export const UpdateProfileActionData = (data, handleClose) => async (dispatch) => {

    try {
        const token = localStorage.getItem("blog_token");
        const final = jwt_decode(token);

        const response = await singleUserServiceUpdate(final?.id, data);
        if (response) {
            ToastSuccess("Profile Updated successfully");
            SingleuserActionData();
            handleClose();
        }
    } catch (error) {

        ToastError(error?.response?.data?.message);
        dispatch(SingleuserFail(error?.response?.data?.message));

    }
}


