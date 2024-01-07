import { createSlice } from "@reduxjs/toolkit";
const Product_Reducer = createSlice({
    name: "Product",
    initialState: {
        loading: false,
        Products: [],
        singleProduct: [],
        CurrentuserProduct: [],
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
        ProductSingleSuccess(state, action) {
            return {
                ...state,
                singleProduct: action.payload,
                loading: false
            }
        },
        ProductCurrentuserSuccess(state, action) {
            return {
                ...state,
                CurrentuserProduct: action.payload,
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
export const { ProductRequest, ProductSuccess, ProductFail, ProductSingleSuccess, ProductCurrentuserSuccess,ClearAllusersData } = actions;
export default reducer;