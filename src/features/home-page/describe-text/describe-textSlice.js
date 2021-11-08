import {createSlice} from "@reduxjs/toolkit";

const DescribeTextSlice = createSlice({
    name: 'describeText',
    initialState: {
        title: 'Clean beauty treatments',
        body: 'ONDA Beauty offers expert esthetician-led facials, massages, energy healing and body treatments. ' +
            'Our practitioners create individualized rituals perfectly suited ' +
            'to your needs so that you leave feeling nourished and renewed.',
        pictures: ''
    },
    reducers: {
        changeTitle(state, actions) {
            state.title = actions.payload
        },
        changeBody(state, actions) {
            state.body = actions.payload
        },
        changePictures(state, actions) {
            state.pictures = actions.payload
        },
    }
})

export const {changeTitle, changePictures, changeBody} = DescribeTextSlice.actions
export default DescribeTextSlice.reducer