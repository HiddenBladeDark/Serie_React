// Extension React 17+
// icons react npm install react-icons
import { FaSpinner } from 'react-icons/fa';
import styles from './Snipper.module.css'

export function Snipper() {
    return (
        <div className={styles.spinner} >
            {/* llamamos el icon */}
            <FaSpinner className={styles.spinnig} size={100} />
        </div>
    )
}
