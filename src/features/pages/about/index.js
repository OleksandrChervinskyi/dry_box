import {Header} from "../../header";
import {Col, Container, Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import styles from './about.module.css'

export const About = () => {
    const {aboutPage: {title, body}} = useSelector(store => store)
    return (
        <>
            <main className={styles.section}>
                <Container>
                    <Row>
                        <Col>
                            <h1>
                                {title}
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                {body}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </main>

        </>
    )
}