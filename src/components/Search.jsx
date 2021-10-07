import styles from './Search.module.css'
import {FaSearch} from 'react-icons/fa'

export function Search(){
    return (
        <form className={styles.searchContainer}>
            {/* formulario de busqueda */}
            <div className={styles.searchBox}>
                <input className={styles.searchInput} type="text" />
                <button className={styles.searchButton} type="submit"><FaSearch size={15} /></button>
            </div>
        </form>
    )
}