import { allusersService } from "../../services/allauthers/allauthors_service"
import { AlluserFail, AlluserRequest, AlluserSuccess } from "../reducer/Alluser_reducer";


export const AlluserActionData = () => async (dispatch) => {

    dispatch(AlluserRequest());
    try {

        const response = await allusersService();

        if (response) {
            dispatch(AlluserSuccess(response?.data));
        }

    } catch (error) {
        dispatch(AlluserFail(error?.response?.data?.message));

    }
}