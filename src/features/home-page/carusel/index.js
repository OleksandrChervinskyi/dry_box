import {Carousel, Container} from "react-bootstrap";
import style from './carusel.module.css'
import tea1 from "../../../tea1.jpg";
import tea2 from "../../../tea2.jpg";
import tea3 from "../../../tea3.jpeg";
import {Link} from "react-router-dom";


export const Carusel = () => {


    return (
        <section className={style.section}>
            <Container>
                <Carousel bsPrefix={'carousel'}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={tea1}
                            alt="First slide"
                        />
                        <Carousel.Caption bsPrefix={style.caption}>
                            <Link to={'#'}>
                                <div>
                                    Shop Here!
                                </div>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={tea2}
                            alt="Second slide"
                        />
                        <Carousel.Caption bsPrefix={style.caption}>
                            <Link to={'#'}>
                                <div>
                                    Shop Here!
                                </div>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={tea3}
                            alt="Third slide"
                        />
                        <Carousel.Caption bsPrefix={style.caption}>
                            <Link to={'#'}>
                                <div>
                                    Shop Here!
                                </div>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </section>
    )
}