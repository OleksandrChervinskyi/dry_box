import {useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import styles from './reviews.module.css'
import face1 from '../../../face1.png'
import face2 from '../../../face2.png'
import face3 from '../../../face3.png'


export const Reviews = () => {

    const {mainPage: {reviews: {body, name}}} = useSelector(store => store)

    return (
        <section className={styles.section}>
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Drybox inside
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className={styles.one_review}>
                            <img src={face1} alt="women1"/>
                            <h3>
                                {name}
                            </h3>
                            <p>
                                {body}
                            </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.one_review}>
                            <img src={face2} alt="women1"/>
                            <h3>
                                {name}
                            </h3>
                            <p>
                                {body}
                            </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={styles.one_review}>
                            <img src={face3} alt="women1"/>
                            <h3>
                                {name}
                            </h3>
                            <p>
                                {body}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}