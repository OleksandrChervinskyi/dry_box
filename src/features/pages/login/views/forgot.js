import {Col, Container, Row} from "react-bootstrap";
import styles from "../login.module.css";
import {changeEmail, changeViewToggle} from "../loginSlice";
import {useDispatch, useSelector} from "react-redux";

export const Forgot = () => {

    const dispatch = useDispatch()
    const {loginPage: {email}} = useSelector(store => store)

    return (
        <Container>
            <Row>
                <Col>
                    <div className={styles.wrap}>
                        <h1>
                            Reset Password
                        </h1>
                        <p>
                            We will send you an email to reset your password.
                        </p>
                        <form className={styles.login_form}>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" name='email' value={email}
                                   onChange={({target: {value}}) => dispatch(changeEmail(value))}/>
                            <p>
                                <button className={styles.singin_bt}>
                                    Submit
                                </button>
                                Or <span onClick={() => dispatch(changeViewToggle())}>Cancel</span>
                            </p>

                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}