import styles from './describe-text.module.css'
import {useSelector} from "react-redux";
import {Col, Container, Row} from "react-bootstrap";
import box1 from '../../../../box1.jpg'


export const DescribeText = () => {

    const {mainPage: {describeText: {body, title}}} = useSelector(store => store)

    return (
        <section className={styles.section}>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={box1} alt="nature"/>
                    </Col>
                    <Col md={6}>
                        <div className={styles.main}>
                            <h2>
                                {title}
                            </h2>
                            <p>
                                {body}
                            </p>
                            <button>
                                Show more
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}