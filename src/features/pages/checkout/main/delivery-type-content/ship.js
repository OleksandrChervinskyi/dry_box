import styles from "./delivery-type-content.module.css";
import {ShippingBt} from "../shipping-bt";

export const Ship = ({value, onChange}) => {
    return (
        <>
            <div className={styles.shipping_address}>
                <h3>
                    Shipping address
                </h3>
                <div className={styles.first_inputs_wrap}>
                    {/*Name*/}
                    <input type="text"
                           placeholder={'First name'}
                           name={'firstName'}
                           value={value.firstName}
                           onChange={onChange}/>
                    {/*Second Name*/}
                    <input type="text"
                           placeholder={'Last name'}
                           name={'lastName'}
                           value={value.lastName}
                           onChange={onChange}/>
                </div>
                {/*City*/}
                <input type="text"
                       placeholder={'City'}
                       name={'city'}
                       value={value.city}
                       onChange={onChange}/>
                {/*Phone*/}
                <input type="number"
                       placeholder={'Phone'}
                       name={'phone'}
                       value={value.phone}
                       onChange={onChange}/>
                {/*Post number*/}
                <input type="text"
                       placeholder={'Post number (Nova Poshta)'}
                       name={'postNumber'}
                       value={value.postNumber}
                       onChange={onChange}/>
            </div>
            <ShippingBt/>
        </>
    )
}