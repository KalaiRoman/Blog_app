import { createSlice } from "@reduxjs/toolkit";
const Alluser_Reducer = createSlice({
    name: "allusers",
    initialState: {
        loading: false,
        allusers: [],
        error: ""
    },
    reducers: {
        AlluserRequest(state, action) {
            return {
                ...state,
                allusers: [],
                loading: true
            }
        },
        AlluserSuccess(state, action) {
            return {
                ...state,
                allusers: action.payload,
                loading: false

            }
        },
        AlluserFail(state, action) {
            return {
                ...state,
                allusers: [],
                loading: false,
                error: action.payload
            }
        },
        ClearAllusersData: (state, action) => {
            return {
                ...state,
                allusers: []
            }
        }
    }
})

const { actions, reducer } = Alluser_Reducer;
export const { AlluserRequest, AlluserSuccess, AlluserFail, ClearAllusersData } = actions;
export default reducer;