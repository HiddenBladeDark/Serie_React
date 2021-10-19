// componente para el grid de las series
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../utils/httpClient";
import { SerieCard } from "./SerieCard";
import series from "./series.json"
import styles from "./SeriesGrid.module.css";
import { Snipper } from "./Snipper";
// nuestros hooks
import {useQuery} from "../hooks/useQuery"
// npm install --save react-infinite-scroll-component
import InfiniteScroll from "react-infinite-scroll-component"
import { Empty } from "./Empty";

// obtenemos el search componente padre de landingpage 
export function Seriesgrid({search}){
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
    // estado para pages infite scroll, inicie en 1
    const [page,setPage] = useState(1);
    // estado de carga
    const [hasMore, setHasMore] = useState(true)



    // fetch funcion de js, en el component de react son catalogadas como funciones puras.
    // no pueden tener efectos secundarios, no pueden llamar api dentro del component directamente.
    // para hacer llamadas de api externas, se usa los jubs.

    // hacer llamada de api asincrona
    // le pasamos una funcion dentro del parametro y esto se ejecutara como efecto secundario
    // cuando el componente cargue en el dom. ejecutara el efecto secundario permitira hacer llamadas asincronas
    useEffect(()=>{
        // cuando este en este punto, este en true el loading
        setIsLoading(true)
        // utilizamos operador ternario
        // si la condicion search se cumple, le asignamos valor a la url
        const searchUrl = search  
        // le pasamos tambien el paginado de la api
        ? "/search/movie?query=" + search + "&page=" + page
        // si no, añade la otra url
        : "/discover/movie?page=" + page;
        // llamamos la funcion de utils, pasandole la url y encadenamos en otra promise

        get(searchUrl).then(data => {
            // le pasamos a la funcion modificación el data.results
            // concatenamos las series que tenemos con las nuevas de la pagina
            setSeries(prevPage => prevPage.concat(data.results));
            // si la pagina actual es menor a total de paginas
            setHasMore(data.page < data.total_pages);
            // cuando este cargado pase a false
            setIsLoading(false);
        })
    // para evitar que cada vez se recargue el componente y no ejecute el efecto secundario
    // usamos un array de dependencias, lo que hara es ejecutar una sola vez estando vacio

    // pero si utilizamos el array de depedencias con un parametro en este caso search. si cambia, se ejecute de nuevo 
    // si cambia la pagina se ejecute el effect en array
    },[search, page]);

    // si el resultado es 0 de la consulta cargue componente y es diferente a true de la carga
    if (!IsLoading && series.length === 0){
        return <Empty/>
    }


    return (
    <InfiniteScroll
        // Longitud de datos de series
        dataLength={series.length}
        // Funcion  que se va ejecutar cuando llegue final de la pagina. en este caso contador
        // recomendado es crear esta funcion , al set,lo cual sera siempre el primer estado

        next={()=> setPage((prevPage) => prevPage + 1)}
        // si es true(hasMore) se ejecutara la funcion que hay en next
        hasMore={hasMore}
        // mientras carga muestre el componente de sniper
        loader={<Snipper/>}
        >
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
    </InfiniteScroll>
    );
}   