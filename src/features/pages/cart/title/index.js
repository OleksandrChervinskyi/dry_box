import {Col, Container, Row} from "react-bootstrap";
import styles from './title.module.css'
import {Link} from "react-router-dom";

export const Title = (props) => {
    return (
        <Container>
            <Row className={'justify-content-center'}>
                <Col md={10}>
                    <h1 className={styles.title}>
                        Shopping cart
                    </h1>
                </Col>
            </Row>
            <Row className={'justify-content-center'}>
                <Col md={10}>
                    <p className={styles.descriptions}>
                        Quantities are limited, don`t miss out
                    </p>
                </Col>
            </Row>
            <Row className={'justify-content-center'}>
                <Col md={10}>
                    <div className={styles.toolkit}>
                        <Link to={'/all-products'}>
                            Continue Shopping
                        </Link>
                        <Link to={'/checkout'}>
                            <button onClick={() => {
                                console.log('dd')
                            }}>
                                CheckOut
                            </button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}