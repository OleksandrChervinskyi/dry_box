import styles from "../aside.module.css";

export const ProductSmallCard = ({product}) => {

    return (
        <div className={styles.product_small_card}>
            <div className={styles.img_wrap}>
                <img src={product.url} alt={product.id}/>
                <span>
                    {product.id}
                </span>
            </div>
            <p className={styles.small_card_title}>
                {product.title}
            </p>
            <p className={styles.price}>
                {product.id}$
            </p>
        </div>
    )
}