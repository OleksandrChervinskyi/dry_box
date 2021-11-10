import {createSlice} from "@reduxjs/toolkit";

const AboutPageSlice = createSlice({
    name: 'aboutPage',
    initialState: {
        title: 'DryBox Mission',
        body: 'The time is now to embrace the value of clean beauty. Whether you are a passionate creator of a clean beauty product, a curious explorer who is looking for an authentic experience, ' +
            'or a long-time lover of clean beauty, ' +
            'ONDA Beauty is here for you.'
    },
    reducers: {
        changeTitle(state, actions) {
            state.title = actions.payload
        },
        changeBody(state, actions) {
            state.body = actions.payload
        }
    }
})

export const {changeTitle, changeBody} = AboutPageSlice.actions
export default AboutPageSlice.reducer