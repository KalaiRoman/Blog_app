import { ToastError, ToastSuccess } from "../../middleware/Toast_action";
import { createBlogService, getBlogService, getSingleUserBlogService } from "../../services/blogs/blog_services";
import { BlogsRequest, BlogsSuccess, CurrentUserBlogSuccess } from "../reducer/Blog_reducer";
import { CurrentuserBlogsRequest, CurrentuserBlogsSuccess } from "../reducer/CurrentUserBlog_reducer";


export const CreateblogActionData = (data, navigate) => async (dispatch) => {
    try {

        const response = await createBlogService(data);
        if (response) {
            ToastSuccess("Blog Created Successfully")
            setTimeout(() => {
                // navigate("/");
            }, 400);
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}


export const getBlogActionData = () => async (dispatch) => {
    dispatch(BlogsRequest())
    try {
        const response = await getBlogService();
        if (response) {
            dispatch(BlogsSuccess(response?.data));
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}



export const getCurrentuserallBlogActionData = (id) => async (dispatch) => {
    dispatch(CurrentuserBlogsRequest())
    try {
        const response = await getSingleUserBlogService(id);
        if (response) {
            dispatch(CurrentuserBlogsSuccess(response?.data));
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}