import { createSlice } from "@reduxjs/toolkit";
import { ToastSuccess } from './../../middleware/Toast_action';
const Cart_reducer = createSlice({
    name: "Cart",
    initialState: {
        loading: false,
        CartData: localStorage.getItem("cartdata") ? JSON.parse(localStorage.getItem("cartdata")) : [],
        error: ""
    },
    reducers: {
        CartAdd(state, action) {
            let newItem = action.payload;
            const existItem = state.CartData.find((item) => item._id === action.payload._id);
            if (existItem) {
                state.CartData = existItem ? state.CartData.map((item) => item._id === existItem._id ? newItem : item) : [...state.CartData, newItem]
                ToastSuccess("Already Added to Cart");
            }
            else {
                state.CartData = existItem ? state.CartData.map((item) => item._id === existItem._id ? newItem : item) : [...state.CartData, newItem]
                localStorage.setItem("cartdata", JSON.stringify(state.CartData));
            }
        },

        CartDelete(state, action) {
            const existItem = state.CartData.filter((item) => item._id !== action.payload);
            localStorage.setItem("cartdata", JSON.stringify(existItem));
            state.CartData = existItem
        },
        ClearCartData: (state, action) => {
            return {
                ...state,
                CartData: []
            }
        }
    }
})

const { actions, reducer } = Cart_reducer;
export const { CartAdd, CartDelete, ClearCartData } = actions;
export default reducer;