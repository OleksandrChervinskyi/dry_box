import {createSlice} from "@reduxjs/toolkit";

const MainSlice = createSlice({
    name: 'checkoutMain',
    initialState: {
        deliveryType: ''
    },
    reducers: {
        setDeliveryType(state, actions) {
            state.deliveryType = actions.payload
        },
    }
})

export const {setDeliveryType,} = MainSlice.actions

export default MainSlice.reducer