import styles from "./counter.module.css";
import {useState} from "react";

export const Counter = (props) => {

    const [localCounter, setLocalCounter] = useState(1)

    return (
        <div className={styles.counter}>
            <i className="fa fa-minus" onClick={() => {
                localCounter > 1 && setLocalCounter(localCounter - 1)
            }}/>
            {localCounter}
            <i className="fa fa-plus" onClick={() => {
                setLocalCounter(localCounter + 1)
            }}/>
        </div>
    );
}