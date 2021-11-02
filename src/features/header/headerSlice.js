import {createSlice} from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        site_name: 'drybox',
        site_motto: 'Live clean. Live testy.',
        total_cart: 0
    },
    reducers: {
        changeSiteName(state, action) {
            state.site_name = action.payload
        },
        changeSiteMotto(state, action) {
            state.site_motto = action.payload
        },
        changeTotalCart(state, action) {
            state.total_cart = state.total_cart + action.payload
        }
    }

})

export const {change} = headerSlice.actions
export default headerSlice.reducer