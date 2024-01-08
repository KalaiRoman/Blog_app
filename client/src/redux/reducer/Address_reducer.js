import { createSlice } from "@reduxjs/toolkit";
const Address_Reducer = createSlice({
    name: "address",
    initialState: {
        loading: false,
        Addresss: [],
        singleAddress: [],
        error: ""
    },
    reducers: {
        AddressRequest(state, action) {
            return {
                ...state,
                Addresss: [],
                loading: true
            }
        },
        AddressSuccess(state, action) {
            return {
                ...state,
                Addresss: action.payload,
                loading: false

            }
        },
        SingleAddressSuccess(state, action) {
            return {
                ...state,
                singleAddress: action.payload,
                loading: false

            }
        },
        AddressFail(state, action) {
            return {
                ...state,
                Addresss: [],
                loading: false,
                error: action.payload
            }
        },
        ClearAllusersData: (state, action) => {
            return {
                ...state,
                Addresss: []
            }
        }
    }
})

const { actions, reducer } = Address_Reducer;
export const { AddressRequest, AddressSuccess, AddressFail, SingleAddressSuccess, ClearAllusersData } = actions;
export default reducer;