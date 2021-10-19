import styles from './Search.module.css'
import {FaSearch} from 'react-icons/fa'
import {useState,useEffect} from "react"
import {useHistory} from 'react-router'
import { useQuery } from '../hooks/useQuery'

export function Search(){
    // controlar location url
    const query = useQuery();
    // obteer nombre url consultado
    const search = query.get("search");

    // cambiar la ruta con un hook usehistrory que viene de route
    const history = useHistory();
    const handleSubmit = (e) => {
        // evitar que se refresque la pagina
        e.preventDefault();
    }
 


    return (
        // cuando hagamos submit llamamos el onsubmit para llamar la funcion
        <form className={styles.searchContainer} onSubmit={handleSubmit} >
            {/* formulario de busqueda */}
            <div className={styles.searchBox}>
                {/* el valor de searchtext para el input */}
                {/* le pasamos el onchange */}
                <input className={styles.searchInput} type="text" 
                    placeholder="Buscar su serie"
                    // le pasamos search de la ruta
                    value={search}  
                    // con onchange miramos los cambios que ingresa en el input
                    // pasandole la funcion setsearchtext que tendra el valor del texto input
                    // cambiamos el valor setsearchttext por el nuevo valor del input e.target.value
                    // y cuando cambie el estado, cambiara automaticamente searchtext. tipo ciclo controlando al 100 el input
                    onChange={(e) => {
                        // ctrl + . creamos una constante sobre la variable 
                        const value = e.target.value
                        // history me lleve a la ruta puesta por el input search
                        history.push("/?search=" + value);                    
                    }} 
                />
                    <FaSearch size={15} className={styles.searchButton} />
            </div>
        </form>
    )
}