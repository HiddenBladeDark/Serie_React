import { Seriesgrid } from "./SeriesGrid";
// importamos el module de css
import styles from "./SerieCard.module.css";
import { Link } from "react-router-dom";
// imagen
import {getSerieImage} from "../utils/getSerieImage"

// reconstruimos parametro
export function SerieCard({serie}){
    // concatenamos la url obtenida del recorrido componente seriesgrid
    // // utilizamos operador ternario
    // si existe poster que cargue la url y si no me cargue la imagen
    const imageUrl = getSerieImage(serie.poster_path,300); 
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