import { createSlice } from "@reduxjs/toolkit";
const Usercart_reducer = createSlice({
    name: "Usercart",
    initialState: {
        loading: false,
        UsercartData: [],
        error: ""
    },
    reducers: {
        UsercartRequest(state, action) {
            return {
                ...state,
                UsercartData: [],
                loading: true
            }
        },
        UsercartSuccess(state, action) {
            return {
                ...state,
                UsercartData: action.payload
            }
        },
        ClearUsercartData: (state, action) => {
            return {
                ...state,
                UsercartData: []
            }
        }
    }
})

const { actions, reducer } = Usercart_reducer;
export const { UsercartRequest, UsercartSuccess, ClearUsercartData } = actions;
export default reducer;