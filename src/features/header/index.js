import {Col, Container, Row} from "react-bootstrap";
import styles from "./header.module.css"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export const Header = () => {

    const {header: {site_name}} = useSelector(store => store)
    const {header: {site_motto}} = useSelector(store => store)
    const {header: {total_cart}} = useSelector(store => store)


    return (
        <header>
            <div className={styles.decor_line}/>
            <Container>
                <div className={styles.section}>
                    <div className={styles.toolbar}>
                        <Row className={'align-items-center'}>
                            <Col xs={10} sm={7}>
                                <div className={styles.login_search}>
                                <span>
                                    <Link to={'/login'}>
                                        Log in /
                                    </Link>
                                </span>
                                    <span>
                                    <Link to={'/login'}>
                                        Join /
                                    </Link>
                                </span>
                                    <div className={styles.search} tabIndex={0}>
                                        <i className="fa fa-search">
                                            <input type="text" placeholder={'SEARCH'}/>
                                        </i>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3} className='d-none d-sm-block'>
                                <div className={styles.icons}>
                                    <Link to={'/#'}>
                                        <i className="fa fa-facebook"/>
                                    </Link>
                                    <Link to={'/#'}>
                                        <i className="fa fa-instagram"/>
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={2}>
                                <div className={styles.cart}>
                                    <p>
                                        {total_cart}$
                                    </p>
                                    <Link to={'#'}>
                                        <i className="fa fa-shopping-cart"/>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col>
                            <div className={styles.title}>
                                <Link to={'/main'}>
                                    <h1>
                                        {site_name}
                                    </h1>
                                </Link>
                                <p>
                                    {site_motto}
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className={styles.extra_nav}>
                                <Link to={'/about'}>
                                    About
                                </Link>
                                <Link to={'/all-products'}>
                                    All products
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </header>
    )
}