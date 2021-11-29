import {Col, Container, Row} from "react-bootstrap";
import styles from './footer.module.css'
import {Link} from "react-router-dom";
import logo2 from '../../logo1.png'

export const Footer = (props) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col className={'text-center'}>
                        <button onClick={scrollToTop}>
                            Back to the top <i className="fa fa-chevron-up"/>
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 10, offset: 1}} className={styles.decor_line}>
                        <div className={styles.motto}>
                            <p>
                                "DryBox - which is Ukrainian directly translates to wave
                                - is more than just another place to buy testy products".
                            </p>
                            <p>
                                -Coveteur
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 3, offset: 3}}>
                        <div className={styles.social}>
                            <Link to={'/#'}>
                                <i className="fa fa-facebook"/>
                            </Link>
                            <Link to={'/#'}>
                                <i className="fa fa-instagram"/>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <div className={styles.map}>
                    <Row>
                        <Col xs={2}>
                            <img src={logo2} alt="Drybox-logo"/>
                        </Col>
                        <Col xs={10}>
                            <div className={styles.wrap}>
                                <Link to={'/main'}>
                                    Home
                                </Link>
                                <Link to={'/about'}>
                                    About us
                                </Link>
                                <Link to={'/all-products'}>
                                    All products
                                </Link>
                                <Link to={'/cart'}>
                                    Cart
                                </Link>
                                <Link to={'/main'}>
                                    Home
                                </Link>
                                <Link to={'/about'}>
                                    About us
                                </Link>
                                <Link to={'/all-products'}>
                                    All products
                                </Link>
                                <Link to={'/cart'}>
                                    Cart
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className={styles.copyright}>
                                Copyright © 2021 by <Link to={'https://github.com/OleksandrChervinskyi/dry_box'}>Oleksandr
                                Chervinskyi</Link>
                            </p>

                        </Col>
                    </Row>
                </div>
            </Container>
        </footer>
    );
}