import styles from "./delivery-type-content.module.css";
import {ShippingBt} from "../shipping-bt";

export const PickUp = () => {
    return (
        <>
            <div className={styles.pickup_location}>
                <h3>
                    Pickup location
                </h3>
                <div className={styles.pickup_location_content}>
                    <div className={styles.pickup_location_content_inner}>
                        <i className={'fa fa-home'}/>
                        <div>
                            <p className={styles.pickup_location_content_title}>
                                Main Office
                            </p>
                            <p className={styles.pickup_location_content_text}>
                                Irpin, Skovorody 11/3
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            Free
                        </p>
                        <p className={styles.pickup_location_content_text}>
                            Usually ready in 24 hours
                        </p>
                    </div>
                </div>
            </div>
            <ShippingBt/>
        </>
    )
}