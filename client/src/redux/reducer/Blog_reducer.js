import { createSlice } from "@reduxjs/toolkit";
const Blogs_Reducer = createSlice({
    name: "Blogs",
    initialState: {
        loading: false,
        Blogdata: [],
        CurrentuserBlogs: [],
        error: ""
    },
    reducers: {
        BlogsRequest(state, action) {
            return {
                ...state,
                Blogdata: [],
                loading: true
            }
        },
        BlogsSuccess(state, action) {
            return {
                ...state,
                Blogdata: action.payload,
                loading: false

            }
        },
        BlogsFail(state, action) {
            return {
                ...state,
                Blogdata: [],
                loading: false,
                error: action.payload
            }
        },
        ClearBlogssData: (state, action) => {
            return {
                ...state,
                Blogdata: []
            }
        }
    }
})

const { actions, reducer } = Blogs_Reducer;
export const { BlogsRequest, BlogsSuccess, BlogsFail, ClearBlogssData, CurrentUserBlogSuccess } = actions;
export default reducer;