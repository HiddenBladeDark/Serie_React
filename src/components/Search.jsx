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
    // usamos el efecto, si cambia la ruta, en el array depedencias, se ejecutara de nuevo  
    // estado para controlar el input
    // searchtext esta vacio
    const [searchText, setSearchText] = useState("");
    // usamos el efecto cuando hay un cambio en search
    useEffect(() => {
        // cambiamos el setsearchtext
        // si esta nulo, me lo sette por comilla vacia
        setSearchText(search || ""); 
    }, [search]);

  
    // cambiar la ruta con un hook usehistrory que viene de route
    const history = useHistory();
    const handleSubmit = (e) => {
        // evitar que se refresque la pagina
        e.preventDefault();
        // history me lleve a la ruta puesta por el input search
        history.push("/?search=" + searchText);
    }
 


    return (
        // cuando hagamos submit llamamos el onsubmit para llamar la funcion
        <form className={styles.searchContainer} onSubmit={handleSubmit} >
            {/* formulario de busqueda */}
            <div className={styles.searchBox}>
                {/* el valor de searchtext para el input */}
                {/* le pasamos el onchange */}
                <input className={styles.searchInput} type="text" 
                    value={searchText} 
                    // con onchange miramos los cambios que ingresa en el input
                    // pasandole la funcion setsearchtext que tendra el valor del texto input
                    // cambiamos el valor setsearchttext por el nuevo valor del input e.target.value
                    // y cuando cambie el estado, cambiara automaticamente searchtext. tipo ciclo controlando al 100 el input
                    onChange={(e) => setSearchText(e.target.value)} />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={15} />
                </button>
            </div>
        </form>
    )
}