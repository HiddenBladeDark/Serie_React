const API = "https://api.themoviedb.org/3";

// funcion fetch 
export function get(path){
// le pasamos discover para un listado de peliculas
// le pasamos encabezado adicionalmente
    return fetch(API + path, {
        headers:{
            Authorization: 
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzliOTNjNGJmZWI0NGMwZDgwMDlhMDUwMWE5YTY5OCIsInN1YiI6IjYxNTRkMDc5OGUyYmE2MDA0MzNiYTM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VtXJUtqWYEH6div8XXSj-6WTi9aSpTO2xf672Fd7vg0",
                "Content-Type":"application/json;charset=utf-8"
        }
        // la promesa es una consulta asincrona, cuando obtenemos el resultado, lo capturamos con then
        // resultado es tipo response, lo convertimo a json, 
        // retornamos la promesa en un json
    }).then(result => result.json())
}