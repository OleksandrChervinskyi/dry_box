import {createSlice} from "@reduxjs/toolkit";

const ReviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        name: 'Mary Wiles',
        body: 'Mary Wiles is a makeup artist to the stars (including our very own co-founder Naomi!) ' +
            'who always enhances, rather than covers up, her clients\' natural beauty. ' +
            'She believes that skin prep is the key to her signature no makeup-makeup look. ',
        picture: ''
    },
    reducers: {
        changeName(state, actions) {
            state.name = actions.payload
        },
        changeBody(state, actions) {
            state.body = actions.payload
        },
        changePictures(state, actions) {
            state.pictures = actions.payload
        },
    }
})

export const {changeName, changeBody, changePictures} = ReviewsSlice.actions
export default ReviewsSlice.reducer