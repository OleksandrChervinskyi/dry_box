import styles from "../aside.module.css";

export const Total = () => {
    return (
        <div className={styles.total}>
            <p>
                Total
            </p>
            <p>
                usd
                <span>
                    0$
                </span>
            </p>
        </div>
    )
}