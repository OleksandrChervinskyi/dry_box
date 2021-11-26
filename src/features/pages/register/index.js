import {Col, Container, Row} from "react-bootstrap";
import styles from './register.module.css'
import {Header} from "../../header";
import {useDispatch, useSelector} from "react-redux";
import {
    changeBirthday,
    changeEmail,
    changeName,
    changePassword,
    changeSurname,
    createNewUser
} from "./registerSlice";

export const RegisterPage = () => {
    const dispatch = useDispatch()
    // Store
    const {
        registerPage: {
            registerForm:
                {name, surname, birthday, email, password}
        }
    } = useSelector(store => store)

    //Submit button
    const clickSubmit = async (e) => {
        e.preventDefault()

        // Create json foor server
        const user = {
            email: email,
            password: password,
            profile: {
                name: name,
                surname: surname,
                birthday: birthday,
            }
        }

        dispatch(createNewUser(user))

    }

    return (
        <>
            <main className={styles.main}>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                Create account
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <form className={styles.register_form} onSubmit={clickSubmit}>
                                <label htmlFor="name">First Name</label>
                                <input type="text" name='name' value={name}
                                       onChange={({target: {value}}) => dispatch(changeName(value))}/>

                                <label htmlFor="surname">Last Name</label>
                                <input type="text" name='surname' value={surname}
                                       onChange={({target: {value}}) => dispatch(changeSurname(value))}/>

                                <label htmlFor="birthday">Birthday</label>
                                <input type="date" name='birthday' value={birthday}
                                       onChange={({target: {value}}) => dispatch(changeBirthday(value))}/>

                                <label htmlFor="email">Email</label>
                                <input type="email" name='email' value={email}
                                       onChange={({target: {value}}) => dispatch(changeEmail(value))}/>

                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' value={password}
                                       onChange={({target: {value}}) => dispatch(changePassword(value))}/>

                                <button type={'submit'}>
                                    Create
                                </button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}