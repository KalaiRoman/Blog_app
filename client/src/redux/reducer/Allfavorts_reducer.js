import { createSlice } from "@reduxjs/toolkit";
const Favorts_Reducer = createSlice({
    name: "Favortss",
    initialState: {
        loading: false,
        Favortss: [],
        error: ""
    },
    reducers: {
        FavortsRequest(state, action) {
            return {
                ...state,
                Favortss: [],
                loading: true
            }
        },
        FavortsSuccess(state, action) {
            return {
                ...state,
                Favortss: action.payload,
                loading: false

            }
        },
        FavortsFail(state, action) {
            return {
                ...state,
                Favortss: [],
                loading: false,
                error: action.payload
            }
        },
        ClearFavortssData: (state, action) => {
            return {
                ...state,
                Favortss: []
            }
        }
    }
})

const { actions, reducer } = Favorts_Reducer;
export const { FavortsRequest, FavortsSuccess, FavortsFail, ClearFavortssData } = actions;
export default reducer;