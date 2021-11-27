import {Col} from "react-bootstrap";
import img from '../../../../tea1.jpg'
import styles from './one-product.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addNewProductToCart} from "../../checkout/checkoutSlice";

export const OneProduct = ({product}) => {

    const dispatch = useDispatch()

    return (
        <Col lg={3} md={4} sm={6}>
            <div className={styles.card}>
                <Link to={{
                    pathname: '/all-products/' + product.id,
                    state: {product}
                }}>
                    <img src={img} alt={product.title}/>
                </Link>

                <div className={styles.ss}>
                    <h4>
                        {product.title}
                    </h4>
                    <p>
                        {product.id}$
                    </p>
                </div>

                <button onClick={() => dispatch(addNewProductToCart(product)) }>
                    Add to cart
                </button>
            </div>
        </Col>
    )
}