import {Link} from "react-router-dom";
import styles from './contact-info.module.css'

export const ContactInfo = ({value, onChange}) => {
    return (
        <div className={styles.contact_info}>
            <div className={styles.contact_info_text}>
                <h3>
                    Contact Information
                </h3>
                <p>
                    Already have an account? <Link to={'login'}>Log in</Link>
                </p>
            </div>
            <input type="email"
                   placeholder={'Email'}
                   name={'email'}
                   value={value.email}
                   onChange={onChange}/>
        </div>
    )
}