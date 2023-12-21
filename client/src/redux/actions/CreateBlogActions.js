import { ToastError, ToastSuccess } from "../../middleware/Toast_action";
import { Blogsingleservice, createBlogService, deleteBlogsingleservice, editBlogsingleservice, getBlogService, getSingleUserBlogService } from "../../services/blogs/blog_services";
import { BlogsRequest, BlogsSuccess, CurrentUserBlogSuccess } from "../reducer/Blog_reducer";
import { CurrentuserBlogsRequest, CurrentuserBlogsSuccess, SingleBlogSuccess } from "../reducer/CurrentUserBlog_reducer";


export const CreateblogActionData = (data, navigate, setLoading) => async (dispatch) => {
    setLoading(true)
    try {

        const response = await createBlogService(data);
        if (response) {
            ToastSuccess("Blog Created Successfully")
            setTimeout(() => {
                navigate("/");
                setLoading(false)
            }, 400);
        }
    } catch (error) {
        ToastError(error?.response?.data?.message);
        setLoading(false)

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

export const EditblogAction = (id, data, navigate, setLoading) => async (dispatch) => {
    setLoading(true)
    try {
        const response = await editBlogsingleservice(id, data);
        ToastSuccess("Blog Updated Successfully")

        if (response) {
            setTimeout(() => {
                navigate("/currentuserblogs")
                setLoading(false);
            }, 500);
        }

    } catch (error) {
        ToastError(error?.response?.data?.message);
        setLoading(false);
    }
}

export const singleblogAction = (id) => async (dispatch) => {
    try {
        const response = await Blogsingleservice(id);

        dispatch(SingleBlogSuccess(response?.data));
    } catch (error) {
        ToastError(error?.response?.data?.message);
    }
}

export const DeletesingleblogAction = (id, setLoading, handleClose, userid) => async (dispatch) => {
    setLoading(true)
    try {
        const response = await deleteBlogsingleservice(id);
        if (response) {
            dispatch(getBlogActionData())
            dispatch(getCurrentuserallBlogActionData(userid))
            setTimeout(() => {
                setLoading(false);
                handleClose();
            }, 400);
        }

    } catch (error) {
        setLoading(false);
        ToastError(error?.response?.data?.message);
    }
}