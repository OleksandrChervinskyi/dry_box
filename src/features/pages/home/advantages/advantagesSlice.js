import {createSlice} from "@reduxjs/toolkit";

const AdvantagesSlice = createSlice({
    name: 'advantages',
    initialState: {
        title: 'We have afterpay',
        body: 'Shop now, pay later with afterpay. Always interest-free',
        icon: ''
    },
    reducers: {
        changeTitle(state, actions) {
            state.title = actions.payload
        },
        changeBody(state, actions) {
            state.body = actions.payload
        },
        changeIcon(state, actions) {
            state.icon = actions.payload
        },
    }
})

export const {changeBody, changeTitle, changeIcon} = AdvantagesSlice.actions
export default AdvantagesSlice.reducer