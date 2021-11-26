import {Link} from "react-router-dom";
import styles from './shipping-bt.module.css'

export const ShippingBt = () => {
    return (
        <div>
            <button className={styles.shipping_bt}>
                Sent application
            </button>
            <p className={styles.return}>
                <Link to={'#'}>
                    Return to Cart
                </Link>
            </p>
        </div>
    )
}