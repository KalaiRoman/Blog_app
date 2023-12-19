import { singleUserService } from "../../services/auth_service/auth_service";
import { SingleuserFail, SingleuserRequest, SingleuserSuccess } from "../reducer/Singleuser_reducer";
import jwt_decode from "jwt-decode";


export const SingleuserActionData = (data) => async (dispatch) => {

    dispatch(SingleuserRequest());
    try {

        const token = localStorage.getItem("blog_token");
        const final = jwt_decode(token);


        if (final) {
            const response = await singleUserService(final?.id);

            console.log(response, 'response')
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