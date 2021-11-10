import {createSlice} from "@reduxjs/toolkit";

const OfferTextSlice = createSlice({
    name: 'offer-text',
    initialState: {
        title: 'Contrary to popular belief',
        body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. ' +
            'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ' +
            'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more ' +
            'obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in '
    },
    reducers: {
        changeOfferTextTitle(state, action) {
            state.title = action.payload
        },
        changeOfferTextBody(state, action) {
            state.title = action.payload
        }
    }
})

export const {changeOfferTextTitle, changeOfferTextBody} = OfferTextSlice.actions
export default OfferTextSlice.reducer