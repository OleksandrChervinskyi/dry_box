import styles from './main.module.css';
import {useEffect, useState} from "react";
import {Ship} from "./delivery-type-content/ship";
import {DeliveryMethod} from "./delivery-method";
import {ContactInfo} from "./contact-info";
import {PickUp} from "./delivery-type-content/pick-up";
import {useDispatch} from "react-redux";
import {setDeliveryType} from "./mainSlice";

export const Main = () => {
    const dispatch = useDispatch()

    const [inputsValue, setInputValue] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        city: '',
        postNumber: '',
        deliveryType: 'ship',
    })

    useEffect(()=> {
        dispatch(setDeliveryType(inputsValue.deliveryType))
    }, [inputsValue.deliveryType])

    // Expect the delivery type - he is semi uncontrolled
    const inputsHandler = (e) => {
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