import { createSlice } from "@reduxjs/toolkit";
const Orders_Reducer = createSlice({
    name: "Orderss",
    initialState: {
        loading: false,
        Orderss: [],
        error: ""
    },
    reducers: {
        OrdersRequest(state, action) {
            return {
                ...state,
                Orderss: [],
                loading: true
            }
        },
        OrdersSuccess(state, action) {
            return {
                ...state,
                Orderss: action.payload,
                loading: false

            }
        },
        OrdersFail(state, action) {
            return {
                ...state,
                Orderss: [],
                loading: false,
                error: action.payload
            }
        },
        ClearOrderssData: (state, action) => {
            return {
                ...state,
                Orderss: []
            }
        }
    }
})

const { actions, reducer } = Orders_Reducer;
export const { OrdersRequest, OrdersSuccess, OrdersFail, ClearOrderssData } = actions;
export default reducer;