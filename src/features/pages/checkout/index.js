import {Col, Container, Row} from "react-bootstrap";
import styles from './cart.module.css'
import {Main} from "./main";

export const Cart = () => {


    return (
        <Container>
            <Row>
                <div className={styles.wrap}>
                    <Col lg={7}>
                        <Main/>
                    </Col>
                    <Col lg={5}>
                        <aside>


                        </aside>
                    </Col>

                </div>
            </Row>
        </Container>
    )
}