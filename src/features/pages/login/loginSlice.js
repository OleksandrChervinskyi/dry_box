import {createSlice} from "@reduxjs/toolkit";

const LoginSlice = createSlice({
    name: 'loginPage',
    initialState: {
        email: '',
        password: '',
        viewToggle: true,
    },
    reducers: {
        changeEmail(state, actions) {
            state.email = actions.payload
        },
        changePassword(state, actions) {
            state.password = actions.payload
        },
        changeViewToggle(state) {
            state.viewToggle = !state.viewToggle
        }
    }
})

export const {changePassword, changeEmail, changeViewToggle} = LoginSlice.actions
export default LoginSlice.reducer