import styles from "./delivery-method.module.css";

export const DeliveryMethod = ({value, onChange}) => {
    return (
        <div className={styles.delivery}>
            <h3>
                Delivery method
            </h3>
            <div onChange={onChange}>
                <div className={styles.delivery_input}>
                    <input type={'radio'}
                           id={'type1'}
                           name={'deliveryType'}
                           value={'ship'}
                    />
                    <label htmlFor="{'type1'}"
                           className={value.deliveryType === 'ship' ? styles.radio_active : ''}>
                        <i className={value.deliveryType === 'ship'
                            ? 'fa fa-truck ' + styles.radio_active : 'fa fa-truck'}/>
                        Ship
                    </label>
                </div>
                <div className={styles.delivery_input}>
                    <input type={'radio'}
                           id={'type2'}
                           name={'deliveryType'}
                           value={'pickUp'}
                    />
                    <label htmlFor="{'type2'}"
                           className={value.deliveryType === 'pickUp' ? styles.radio_active : ''}>
                        <i className={value.deliveryType === 'pickUp'
                            ? 'fa fa-street-view ' + styles.radio_active : 'fa fa-street-view'}/>
                        Pick Up
                    </label>
                </div>
            </div>
        </div>
    )
}