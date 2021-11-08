import {Col, Container, Row} from "react-bootstrap";
import style from './offer-text.module.css'
import {useSelector} from "react-redux";

export const OfferText = () => {

    const {mainPage: {offerText: {title, body}}} = useSelector(store => store)

    return (
        <section className={style.section}>
            <Container>
                <Row>
                    <Col>
                        <div className={style.main}>
                            <h2>
                                {title}
                            </h2>
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