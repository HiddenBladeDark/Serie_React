import { useEffect } from "react"
import { useParams } from "react-router"
import { useState } from "react/cjs/react.development"
import { Snipper } from "../components/Snipper"
import { get } from "../utils/httpClient"
import serie from "./serie.json"
import styles from "./SerieDetails.module.css"
import {useQuery} from "../hooks/useQuery"

export function SerieDetails(){
    // traer el parametro de la url tal cual como esta asignado en app.jsx 
    const {serieId} = useParams();
    // obtenemos los datos y modificaciones
    const [serie,setSerie] = useState(null);
    // utilizamos constante para saber si la pelicula esta cargando y seteamos el estado
    const [isLoading, SetIsLoading] = useState(true);


    // usamos el useffect para obtener el efecto secundario una vez que cargue el componente y traer los detalles
    useEffect(()=>{
        // antes de gettear los datos, ponemos en true
        SetIsLoading(true);
        // llamamos la funcion get de utils para hacer el llamado de la api mas detallado por id
        // realizamos de nuevo la promesa con usestate
        get("/movie/"+ serieId).then(data => {
            // pasamos los datos setserie serie
            setSerie(data)
            // una vez geteado ponemos el loading en false
            SetIsLoading(false);
        })
        // array dependencia depende de serieId, si cambia el serieId.
        // Se ejecute de nuevo el efecto 
    },[serieId])
    
    // si es true el cargando nos retornara el componente snipper hasta que cargue el efecto secundario
    if (isLoading){
        return <Snipper/>
    }


    // si serie esta nulo nos retorne null
    // if (!serie){
    //     return null;
    // }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + serie.poster_path
    return ( 
    <div className={styles.detailsContainer}>
        {/* de esta forma se concatenan las clases en jsx interpolarizacion */}
        <img className={`${styles.colcontent} ${styles.serieImage}`} src={imageUrl} alt={serie.title} />
        <div className={ `${styles.colcontent} ${styles.serieDetails}`} >
            <p><h2><strong>Titulo:</strong> {serie.title}</h2></p>
            <p><strong> Descripcion:</strong> {serie.overview} </p>
            {/* recorremos el genero que es un array y lo separamos con join */}
            <p><strong>Genero:</strong> { serie.genres.map((geners) => geners.name ).join(", ") }</p>
        </div>
    </div>
    )
}