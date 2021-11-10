import {createSlice} from "@reduxjs/toolkit";

const AddPicturesSlice = createSlice({
    name: 'addPictures',
    initialState: {
        allPictures: []
    },
    reducers: {
        changeArray(state, actions) {
            state.allPictures = actions.payload
        }
    }
})

export const {changeArray} = AddPicturesSlice.actions
export default AddPicturesSlice.reducer