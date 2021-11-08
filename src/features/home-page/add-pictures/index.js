import {Col, Container, Row} from "react-bootstrap";
import styles from './add-pictures.module.css'
import nature1 from '../../../nature1.jpg'
import nature2 from '../../../nature2.jpg'
import nature3 from '../../../nature3.jpg'
import nature4 from '../../../nature4.jpg'
import {Link} from "react-router-dom";

export const AddPictures = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Row>
                    <Col lg={3} md={6} sm={6}>
                        <div className={styles.image_wrap}>
                            <Link to={'#'}>
                                <img src={nature1} alt="nature1"/>
                                <span>
                                    Some text
                                </span>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <div className={styles.image_wrap}>
                            <Link to={'#'}>
                                <img src={nature2} alt="nature1"/>
                                <span>
                                    Some text
                                </span>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <div className={styles.image_wrap}>
                            <Link to={'#'}>
                                <img src={nature3} alt="nature1"/>
                                <span>
                                    Some text
                                </span>
                            </Link>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={6}>
                        <div className={styles.image_wrap}>
                            <Link to={'#'}>
                                <img src={nature4} alt="nature1"/>
                                <span>
                                    Some text
                                </span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}