import {createSlice} from "@reduxjs/toolkit";

const RegisterSlice = createSlice({
    name: 'registerPage',
    initialState: {
        registerForm: {
            name: '',
            surname: '',
            birthday: '',
            email: '',
            password: '',
        }
    },
    reducers: {
        changeName(state, actions) {
            state.registerForm.name = actions.payload
        },
        changeSurname(state, actions) {
            state.registerForm.surname = actions.payload
        },
        changeBirthday(state, actions) {
            state.registerForm.birthday = actions.payload
        },
        changeEmail(state, actions) {
            state.registerForm.email = actions.payload
        },
        changePassword(state, actions) {
            state.registerForm.password = actions.payload
        },
    }
})
export const {changeName, changeEmail, changeSurname, changeBirthday, changePassword} = RegisterSlice.actions

export const createNewUser = (user) => async dispatch => {
    console.log(JSON.stringify(user))
    try {

    } catch {

    } finally {
        // const res = await fetch('http://127.0.0.1:8000/api/v1/users', {
        //     method: 'POST',
        //     body: JSON.stringify(user)
        // })
        // const json = await res.json()
        // console.log(json)
    }
}


export default RegisterSlice.reducer
