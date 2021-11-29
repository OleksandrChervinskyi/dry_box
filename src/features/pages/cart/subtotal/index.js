import {Col, Container, Row} from "react-bootstrap";
import styles from './subtotal.module.css'
import {Link} from "react-router-dom";

export const Subtotal = (props) => {
    return (
        <Container>
            <div className={styles.wrap}>
                <Row>
                    <Col md={{span: 5, offset: 1}}>
                        <div className={styles.textarea}>
                            <p>
                                Add a note to your order
                            </p>
                            <textarea name={'notes'} cols="111" rows="111"/>
                        </div>
                    </Col>
                    <Col md={5}>
                        <div className={styles.context}>
                            <h2>
                                Subtotal : 0$
                            </h2>
                            <p>
                                Taxes and shipping calculated at checkout
                            </p>
                            <Link to={'/checkout'}>
                                <button>
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}