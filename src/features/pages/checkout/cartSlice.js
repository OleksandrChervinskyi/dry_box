import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cartPage',
    initialState: {
        selectedProducts: [],
    },
    reducers: {
        // addNewProductToCart(state, actions) {
        //     state.selectedProducts.push(actions.payload)
        // }
    }
})

export const {addNewProductToCart} = CartSlice.actions

//Fetch selected products

export default CartSlice.reducer