import {Col} from "react-bootstrap";
import img from '../../../../tea1.jpg'
import styles from './one-product.module.css'

export const OneProduct = ({product}) => {

    return (
        <Col lg={3}>
            <div className={styles.card}>
                <img src={img} alt={product.title}/>
                <div className={styles.ss}>
                    <h4>
                        {product.title}
                    </h4>
                    <p>
                        {product.id}$
                    </p>
                </div>

                <button>
                    Add to cart
                </button>
            </div>
        </Col>
    )
}