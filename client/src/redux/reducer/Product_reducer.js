import { createSlice } from "@reduxjs/toolkit";
const Product_Reducer = createSlice({
    name: "Product",
    initialState: {
        loading: false,
        Products: [],
        error: ""
    },
    reducers: {
        ProductRequest(state, action) {
            return {
                ...state,
                Products: [],
                loading: true
            }
        },
        ProductSuccess(state, action) {
            return {
                ...state,
                Products: action.payload,
                loading: false

            }
        },
        ProductFail(state, action) {
            return {
                ...state,
                Products: [],
                loading: false,
                error: action.payload
            }
        },
        ClearAllusersData: (state, action) => {
            return {
                ...state,
                Products: []
            }
        }
    }
})

const { actions, reducer } = Product_Reducer;
export const { ProductRequest, ProductSuccess, ProductFail, ClearAllusersData } = actions;
export default reducer;