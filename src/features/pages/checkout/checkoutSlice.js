import {createSlice} from "@reduxjs/toolkit";

const CheckoutSlice = createSlice({
    name: 'checkoutPage',
    initialState: {
        selectedProducts: [],
    },
    reducers: {
        // addNewProductToCart(state, actions) {
        //     state.selectedProducts.push(actions.payload)
        // }
    }
})

export const {addNewProductToCart} = CheckoutSlice.actions

//Fetch selected products

export default CheckoutSlice.reducer