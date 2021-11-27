import styles from "../aside.module.css";
import {useSelector} from "react-redux";

export const Subtotal = () => {

    const {checkoutPage: {main: {deliveryType}}} = useSelector(store => store)

    return (
        <div className={styles.subtotal}>
            <div className={styles.subtotal_wrap}>
                <p>
                    Subtotal
                </p>
                <p>
                    10$
                </p>
            </div>
            <div className={styles.subtotal_wrap}>
                <p>
                    {deliveryType === 'ship' ? 'Shipping' : 'Pickup'}
                </p>
                <p>
                    {deliveryType === 'ship' ? 'Around 50$' : 'Free'}
                </p>
            </div>
        </div>
    )
}