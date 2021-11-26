import styles from './main.module.css';
import {useState} from "react";
import {Ship} from "./delivery-type-content/ship";
import {DeliveryMethod} from "./delivery-method";
import {ContactInfo} from "./contact-info";
import {PickUp} from "./delivery-type-content/pick-up";

export const Main = () => {

    const [inputsValue, setInputValue] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        city: '',
        postNumber: '',
        deliveryType: 'ship',
    })

    // Expect the delivery type - he is semi uncontrolled
    const inputsHandler = (e) => {
        console.log(e.target)
        const {target: {name, value}} = e
        setInputValue({...inputsValue, [name]: value})
    }

    return (
        <main className={styles.main}>
            <ContactInfo value={inputsValue} onChange={inputsHandler}/>
            <DeliveryMethod value={inputsValue} onChange={inputsHandler}/>

            {/*Depend of delivery method*/}
            {inputsValue.deliveryType === 'ship' && <Ship value={inputsValue} onChange={inputsHandler}/>}
            {inputsValue.deliveryType === 'pickUp' && <PickUp/>}

        </main>
    )
}