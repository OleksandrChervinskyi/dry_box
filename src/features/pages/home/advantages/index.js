import {useSelector} from "react-redux";
import styles from './advantages.module.css'
import {Col, Container, Row} from "react-bootstrap";

export const Advantages = () => {

    const {mainPage: {advantages: {body, title}}} = useSelector(store => store)

    return (
        <section className={styles.section}>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className={styles.one_advantage}>
                            <i className="fa fa-forward"/>
                            <h3>
                                {title}
                            </h3>
                            <p>
                                {body}
                            </p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className={styles.one_advantage}>
                            <i className="fa fa-forward"/>
                            <h3>
                                {title}
                            </h3>
                            <p>
                                {body}
                            </p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className={styles.one_advantage}>
                            <i className="fa fa-forward"/>
                            <h3>
                                {title}
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