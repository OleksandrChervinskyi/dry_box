import {createSlice} from "@reduxjs/toolkit";

const OneProductDetailsSlice = createSlice({
    name: 'oneProductDetailsPage',
    initialState: {
        product: {},
        isLoading: false
    },
    reducers: {
        changeProduct(state, actions) {
            state.product = actions.payload
        },
        changeIsLoading(state) {
            state.product = !state.product
        }
    }
})

export const {changeProduct, changeIsLoading} = OneProductDetailsSlice.actions


export const getOneById = (id) => async dispatch => {
    try {
        dispatch(changeIsLoading())
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        const data = await res.json()

        dispatch(changeIsLoading())
        return data

    } catch (e) {
        console.log(e)
    }
}

export default OneProductDetailsSlice.reducer