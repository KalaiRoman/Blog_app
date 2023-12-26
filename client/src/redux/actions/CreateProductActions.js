import { ToastSuccess } from "../../middleware/Toast_action";
import { createproductService, getCurrentsingleproductServices, getproductServices } from "../../services/product_service/product_service"
import { ProductFail, ProductRequest, ProductSingleSuccess, ProductSuccess } from "../reducer/Product_reducer";



export const CreateProductActions = (data, navigtate) => async (dispatch) => {
    try {

        const response = await createproductService(data);
        if (response) {
            ToastSuccess(response?.message);
            setTimeout(() => {
                navigtate("/ecommerce")
            }, 400);
        }

    } catch (error) {
        console.log(error)
    }
}


export const GetProductActions = () => async (dispatch) => {
    dispatch(ProductRequest())
    try {

        const response = await getproductServices();
        if (response) {
            dispatch(ProductSuccess(response?.data));

        }

    } catch (error) {
        dispatch(ProductFail("product get error"))

    }
}

export const GetSingleProductActions = (id) => async (dispatch) => {
    try {

        const response = await getCurrentsingleproductServices(id);
        if (response) {
            dispatch(ProductSingleSuccess(response?.data));
        }

    } catch (error) {
        dispatch(ProductFail("product get error"))

    }
}