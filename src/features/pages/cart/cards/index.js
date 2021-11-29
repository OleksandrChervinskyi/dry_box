import {Col, Container, Row} from "react-bootstrap";
import styles from './cards.module.css'
import {useSelector} from "react-redux";
import {OneCard} from "./oneCard";

export const Cards = () => {
    const {checkoutPage: {aside: {selectedProducts}}} = useSelector(store => store)


    return (
        <Container>
            <Row>
                <Col md={{span: 6, offset: 1}} className={'d-none d-md-block ' + styles.bottom_line}>
                    <p>
                        Descriptions
                    </p>
                </Col>
                <Col md={1} className={'d-none d-md-block ' + styles.bottom_line}>
                    <p>
                        Price
                    </p>
                </Col>
                <Col md={2} className={'d-none d-md-block ' + styles.bottom_line}>
                    <p>
                        Quantity
                    </p>
                </Col>
                <Col md={1} className={'d-none d-md-block text-end ' + styles.bottom_line}>
                    <p>
                        Total
                    </p>
                </Col>
            </Row>
            {selectedProducts
                .filter(product => product.id < 5)
                .map(product => <OneCard key={product.id} selectedProducts={product}/>)
            }
        </Container>
    );
}