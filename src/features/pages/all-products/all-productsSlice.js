import {createSlice} from "@reduxjs/toolkit";

const AllProductsSlice = createSlice({
    name: 'allProducts',
    initialState: {
        products: [],
        isLoading: false,
        sortValue: 'lowToHigh',
        filterValue: 'all',
    },
    reducers: {
        addProducts(state, actions) {
            state.products = actions.payload
        },
        toggleIsLoading(state) {
            state.isLoading = !state.isLoading
        },
        changeSortValue(state, actions) {
            state.sortValue = actions.payload
        },
        changeFilterValue(state, actions) {
            state.filterValue = actions.payload
        },

    }
})
export const {addProducts, toggleIsLoading, changeSortValue, changeFilterValue} = AllProductsSlice.actions


export const getAll = () => async dispatch => {
    try {
        dispatch(toggleIsLoading())

        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        dispatch(addProducts(data))
        dispatch(toggleIsLoading())
    } catch (e) {
        console.log(e)
    }

}


export default AllProductsSlice.reducer