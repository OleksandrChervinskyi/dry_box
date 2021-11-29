import {Col, Container, Row} from "react-bootstrap";
import styles from './checkout.module.css'
import {Main} from "./main";
import {Aside} from "./aside";

export const Checkout = () => {


    return (
        <Container>
            <Row className={styles.wrap}>
                <Col md={7} sm={11}>
                    <Main/>
                </Col>
                <Col md={5} sm={11} className={styles.background_grey}>
                    <Aside/>
                </Col>
            </Row>
        </Container>
    )
}