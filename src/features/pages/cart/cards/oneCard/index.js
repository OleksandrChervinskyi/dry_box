import styles from './one-card.module.css'
import {Col, Row} from "react-bootstrap";
import {Counter} from "../../../../global-components/counter";

export const OneCard = ({selectedProducts}) => {
    return (
        <Row className={styles.card}>
            <Col md={{span: 6, offset: 1}} className={styles.bottom_line}>
                <div className={styles.title_img}>
                    <img src={selectedProducts.url} alt={selectedProducts.title}/>
                    <p>
                        {selectedProducts.title}
                    </p>
                </div>
            </Col>
            <Col xs={4} md={1} className={styles.bottom_line}>
                <p>
                    {selectedProducts.id}$
                </p>
            </Col>
            <Col xs={4} md={2} className={styles.bottom_line}>
                <Counter/>
            </Col>
            <Col xs={4} md={1} className={'text-end ' + styles.bottom_line}>
                {selectedProducts.id}$
            </Col>
        </Row>
    );
}