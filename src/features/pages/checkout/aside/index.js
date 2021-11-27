import styles from './aside.module.css'
import {useEffect} from "react";
import {getSelectedCard} from "./asideSlice";
import {useDispatch, useSelector} from "react-redux";
import {ProductSmallCard} from "./product-small-card";
import {Subtotal} from "./subtotal";
import {Total} from "./total";

export const Aside = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSelectedCard())
    }, [])

    const {checkoutPage: {aside: {selectedProducts}}} = useSelector(store => store)


    return (
        <aside className={styles.main}>
            {selectedProducts
                .filter(value => +value.id < 4)
                .map(oneProduct => <ProductSmallCard key={oneProduct.id} product={oneProduct}/>)}
            <Subtotal/>
            <Total/>
        </aside>
    )
}