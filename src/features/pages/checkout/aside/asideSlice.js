import {createSlice} from "@reduxjs/toolkit";

const AsideSlice = createSlice({
    name: 'checkoutAside',
    initialState: {
        selectedProducts: []
    },
    reducers: {
        setSelectedProducts(state, actions) {
            state.selectedProducts = actions.payload
        }
    }
})
export const {setSelectedProducts} = AsideSlice.actions

export const getSelectedCard = () => async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const json = await res.json()

    dispatch(setSelectedProducts(json))
}

export default AsideSlice.reducer