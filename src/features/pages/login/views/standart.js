import {Col, Container, Row} from "react-bootstrap";
import styles from "../login.module.css";
import {changeEmail, changePassword, changeViewToggle} from "../loginSlice";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

export const Standart = () => {

    const {loginPage: {email, password, viewToggle}} = useSelector(store => store)
    const dispatch = useDispatch()

    let clickSingIn;


    return (
        <Container>
            <Row>
                <Col>
                    <div className={styles.wrap}>
                        <h1>
                            Login
                        </h1>
                        <form className={styles.login_form} onSubmit={clickSingIn}>
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="text" name='email' value={email}
                                   onChange={({target: {value}}) => dispatch(changeEmail(value))}/>

                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" name='password' value={password}
                                   onChange={({target: {value}}) => dispatch(changePassword(value))}/>

                            <span className={styles.forgot_bt} onClick={() => {
                                dispatch(changeViewToggle())
                            }}>
                            Forgot your password?
                        </span>
                            <button className={styles.singin_bt} type={"submit"}>
                                Sign in
                            </button>
                            <p>
                                <Link to={'/register'}>
                                    New customer? Sign up for an account
                                </Link>
                            </p>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}