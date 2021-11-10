import {createSlice} from "@reduxjs/toolkit";

const PopularBrandsSlice = createSlice({
    name: 'popularBrands',
    initialState: {
        title: 'Popular brands',
        pictures: []
    },
    reducers: {
        changeTitle(state, actions) {
            state.title = actions.payload
        }
    }
})

export const {changeTitle} = PopularBrandsSlice.actions
export default PopularBrandsSlice.reducer