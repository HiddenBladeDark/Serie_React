// componente para el grid de las series
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import { SerieCard } from "./SerieCard";
import series from "./series.json"
import styles from "./SeriesGrid.module.css";
import { Snipper } from "./Snipper";


export function Seriesgrid(){
    // actualizar el estado con los datos actualizados
    // const serieState = useState([]);
    // nos regresa un arreglo, el cual obtenemos el primer acceso en la posicion 0 de series
    // const series = serieState[0];
    // en la posicion 1 nos permite modificar el valor de series
    // const setSeries = serieState[1];
    // de esta forma seria lo mismo que lo de arriba, posicion 0 y 1
    const [series, setSeries ] = useState([]);
    // estado para el snniper carga en true
    const [IsLoading, setIsLoading] = useState(true);

    // fetch funcion de js, en el component de react son catalogadas como funciones puras.
    // no pueden tener efectos secundarios, no pueden llamar api dentro del component directamente.
    // para hacer llamadas de api externas, se usa los jubs.

    // hacer llamada de api asincrona
    // le pasamos una funcion dentro del parametro y esto se ejecutara como efecto secundario
    // cuando el componente cargue en el dom. ejecutara el efecto secundario permitira hacer llamadas asincronas
    useEffect(()=>{
        // cuando este en este punto, este en true el loading
        setIsLoading(true)

        // llamamos la funcion de utils, pasandole la url y encadenamos en otra promise
        get("/discover/movie").then(data => {
            // le pasamos a la funcion modificación el data.results
            setSeries(data.results);
            // cuando este cargado pase a false
            setIsLoading(false);
        })
    // para evitar que cada vez se recargue el componente y no ejecute el efecto secundario
    // usamos un array de dependencias, lo que hara es ejecutar una sola vez
    },[]);

    // si esta cargando true, retorne el componente carga
    if(IsLoading){
        return <Snipper/>
    }


    return (
    <ul className={styles.seriesGrid}>
        {/* con map recorremos el objeto en este caso el json */}
        {
            series.map((serie) => (
                // retornamos con la funcion flecha el objeto del recorrido
                // le agregamos key a la lista por temas rendimiento react
                // Usamos el componente SerieCard pasandole atributos
                <SerieCard key={serie.id} serie={serie} />
            ))
        }
    </ul>
    );
}   