// componente App
// importamos componente seriesgrid
import { Seriesgrid } from "./components/SeriesGrid";
import styles from "./App.module.css";
// rutas
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import { SerieDetails } from "./pages/SerieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App(){
    return (
        // Router es el elemento principal, para controlar el navegador
    <Router className={styles.content_princ} >
        <header >
            <div className={styles.navbar_princ}>
                {/* con link direcionamos la pagina sin refrescar, en cambio con href es lo contrario */}
                <h1><Link to="/" > APP_SERIES_GENER </Link></h1>
            </div>
        </header>
        <main>
            {/* router para direccionar single page aplication. el home se pone a lo ultimo*/}
            {/* con exact es la ruta exacta del sitio*/}
            {/* de esta forma creamos la ruta */}
            <Switch>
                {/* con /:parametro le estamos pasando un parametro por url */}
                <Route  path="/serie/:serieId"><SerieDetails/></Route>
                <Route exact path="/"><LandingPage/></Route>
                <Route path="/">404 NOT FOUND</Route>
            </Switch>
        </main>
        <footer>
            <div className={styles.footer_princ}>

            </div>
        </footer>
    </Router>
    )
} 