import {createSlice} from "@reduxjs/toolkit";

const CarouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        allImg: []
    },
    reducers: {
        changeArrayImg(state, actions) {
            state.allImg = actions.payload
        }
    }
})

export const {changeArrayImg} = CarouselSlice.actions
export default CarouselSlice.reducer