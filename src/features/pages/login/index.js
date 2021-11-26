import {Header} from "../../header";
import styles from './login.module.css'
import {useSelector} from "react-redux";
import {Standart} from "./views/standart";
import {Forgot} from "./views/forgot";

export const LoginPage = () => {

    const {loginPage: {viewToggle}} = useSelector(store => store)
    console.log(viewToggle)
    return (
        <>
            <main className={styles.main}>
                {viewToggle ? <Standart/> : <Forgot/>}
            </main>
        </>
    )
}