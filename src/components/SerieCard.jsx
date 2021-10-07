import { Seriesgrid } from "./SeriesGrid";
// importamos el module de css
import styles from "./SerieCard.module.css";
import { Link } from "react-router-dom";

// reconstruimos parametro
export function SerieCard({serie}){
    // concatenamos la url obtenida del recorrido componente seriesgrid
    const imageUrl = "https://image.tmdb.org/t/p/w300" + serie.poster_path
    return (
        // retornamos y en css le agregamos styles para sacar sus objetos
        <li className={styles.serieCard} >
            {/* para que sea dinamico de texto por el parametro de ingreso de la funcion se pone "{}" atributo */}
            {/* redireccionamos con link a serie creada en app.jsx */}
            <Link to={"/serie/" + serie.id} >
                <img className={styles.serieImage} src={imageUrl} alt="{serie.title}" ></img>
                <div>{serie.title}</div>
            </Link>
        </li>
    );
}