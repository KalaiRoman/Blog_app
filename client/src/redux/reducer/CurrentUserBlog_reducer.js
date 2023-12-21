import { createSlice } from "@reduxjs/toolkit";
const CurrentuserBlogs_Reducer = createSlice({
    name: "CurrentuserBlogs",
    initialState: {
        loading: false,
        CurrentUserBlogs: [],
        singleblog: [],
        error: ""
    },
    reducers: {
        CurrentuserBlogsRequest(state, action) {
            return {
                ...state,
                CurrentUserBlogs: [],
                loading: true
            }
        },
        CurrentuserBlogsSuccess(state, action) {
            return {
                ...state,
                CurrentUserBlogs: action.payload,
                loading: false

            }
        },
        CurrentuserBlogsFail(state, action) {
            return {
                ...state,
                CurrentUserBlogs: [],
                loading: false,
                error: action.payload
            }
        },
        SingleBlogSuccess(state, action) {
            state.singleblog = action.payload
        },

        ClearCurrentuserBlogssData: (state, action) => {
            return {
                ...state,
                CurrentUserBlogs: []
            }
        }
    }
})

const { actions, reducer } = CurrentuserBlogs_Reducer;
export const { CurrentuserBlogsRequest, CurrentuserBlogsSuccess, CurrentuserBlogsFail, ClearCurrentuserBlogssData,SingleBlogSuccess } = actions;
export default reducer;