import { Search } from "../components/Search";
import { Seriesgrid } from "../components/SeriesGrid";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){
    // instanciamos
    const query = useQuery();
    // llamamos el get de la busqueda search para sacarlo
    const search = query.get("search");

    // el debouncesearch nos sirve para que el tiempo de busqueda se tarde o se ejecute rapido para enviar peticion por api
    // tambien le pasamos search
    const debouncedSearch = useDebounce(search, 300)
    return <div>
        <Search/>
        {/* le pasamos la key al component seriesgrid de la busqueda realizada */}
        {/* lo que hace es que si cambia la clave por cualquier razon, react destruye el component y lo crea de nuevo */}
        {/* de esta forma destruimos el component de seriesgrid para resetear todo */}
        {/* le pasamos search para la busqueda */}
        <Seriesgrid key={debouncedSearch} search={debouncedSearch} />
        </div> 
}