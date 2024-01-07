import { ToastSuccess } from "../../middleware/Toast_action";
import { CurrentuserProductServices, createproductService, deleteProductService, editProductService, getCurrentsingleproductServices, getproductServices } from "../../services/product_service/product_service"
import { ProductCurrentuserSuccess, ProductFail, ProductRequest, ProductSingleSuccess, ProductSuccess } from "../reducer/Product_reducer";



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

export const ProductActionsCurrentuser = () => async (dispatch) => {
    try {

        const response = await CurrentuserProductServices();
        if (response) {
            dispatch(ProductCurrentuserSuccess(response?.data));
        }

    } catch (error) {
        dispatch(ProductFail("product get error"))

    }
}

export const EditProductActions = (id, data, navigate) => async (dispatch) => {
    try {
        const response = await editProductService(id, data);
        if (response) {
            ToastSuccess(response?.message);
            navigate("/ecommerce/ourproducts")
        }

    } catch (error) {
        dispatch(ProductFail("product get error"))

    }
}

export const DeleteProductActions = (id) => async (dispatch) => {
    try {
        const response = await deleteProductService(id);
        if (response) {
            ToastSuccess(response?.message);
            dispatch(ProductActionsCurrentuser());
        }

    } catch (error) {
        dispatch(ProductFail("product get error"))

    }
}