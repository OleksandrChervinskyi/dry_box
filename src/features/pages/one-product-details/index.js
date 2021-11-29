import styles from './one-product-details.module.css'
import {Col, Container, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getOneById} from "./one-product-detailsSlice";
import {Counter} from "../../global-components/counter";

export const OneProductDetails = (props) => {
    const dispatch = useDispatch()
    const {id} = useParams()

    //Loading status
    const {oneProductDetailsPage: {isLoading}} = useSelector(store => store)

    //Local state
    const [localProduct, setLocalProduct] = useState()


    const getOneProduct = async (id) => {
        if (!props.location.state) {
            // From server
            const res = await dispatch(getOneById(id))
            // const data = await res.json()
            setLocalProduct(res)

        } else {
            // From location.state
            const {product} = props.location.state
            setLocalProduct(product)
        }
    }


    useEffect(() => {
        getOneProduct(id)
    }, [id])

    return (
        <>
            <main className={styles.main}>
                <Container>
                    <Row>
                        <Col>
                            <div className={styles.local_navigation}>
                                <p>
                                    Back to : <Link to={'/all-products'}>SHOP</Link>
                                </p>
                                <p>
                                    {+id !== 1 && <Link to={'/all-products/' + (id - 1)}>
                                        Previous
                                    </Link>}
                                    <span>
                                          /
                                    </span>
                                    <Link to={'/all-products/' + (+id + 1)}>
                                        Next
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>

                        </Col>
                        <Col lg={6}>
                            <div className={styles.descriptions}>
                                <h1>
                                    {!isLoading && localProduct && localProduct.title}
                                </h1>
                                <p className={styles.price}>
                                    ${!isLoading && localProduct && localProduct.id}
                                </p>
                                <div className={styles.quantity}>
                                    <span>Quantity</span>
                                    <div className={styles.wrap}>
                                        <Counter/>
                                        <button>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <h4>
                                        Description:
                                    </h4>
                                    <p>
                                        {localProduct && localProduct.body}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}