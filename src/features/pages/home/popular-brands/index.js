import {useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import styles from './popular-brands.module.css'
import popularBrand1 from '../../../../popularBrand1.jpg'
import popularBrand2 from '../../../../popularBrand2.jpg'
import popularBrand3 from '../../../../popularBrand3.jpg'
import popularBrand4 from '../../../../popularBrand4.jpg'
import {Link} from "react-router-dom";

export const PopularBrands = () => {

    const {mainPage: {popularBrands: {title}}} = useSelector(store => store)

    return (
        <section className={styles.section}>
            <Container>
                <Row>
                    <Col>
                        <h2>
                            {title}
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} sm={6}>
                        <Link to={'#'}>
                            <div className={styles.img_wrap}>
                                <img src={popularBrand1} alt="picture1"/>
                            </div>
                        </Link>
                    </Col>
                    <Col md={3} sm={6}>
                        <Link to={'#'}>
                            <div className={styles.img_wrap}>
                                <img src={popularBrand2} alt="picture2"/>
                            </div>
                        </Link>
                    </Col>
                    <Col md={3} sm={6}>
                        <Link to={'#'}>
                            <div className={styles.img_wrap}>
                                <img src={popularBrand3} alt="picture3"/>
                            </div>
                        </Link>
                    </Col>
                    <Col md={3} sm={6}>
                        <Link to={'#'}>
                            <div className={styles.img_wrap}>
                                <img src={popularBrand4} alt="picture4"/>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}