import { loginUer, registerUser } from "../../services/auth_service/auth_service"
import { ToastError, ToastSuccess } from './../../middleware/Toast_action';
import { SingleuserActionData } from "./SingleuserAction";

export const LoginAction = (data, navigate) => async (dispatch) => {
    try {

        const response = await loginUer(data);
        if (response) {
            localStorage.setItem("blog_token", JSON.stringify(response?.token));
            ToastSuccess("User Login Successfully")
            setTimeout(() => {
                navigate("/");
                dispatch(SingleuserActionData());
            }, 400);
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}


export const RegisterAction = (data, navigate) => async () => {
    try {
        const response = await registerUser(data);
        if (response) {
            ToastSuccess("User Register Successfully");
            setTimeout(() => {
                navigate("/login");
            }, 400);
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}