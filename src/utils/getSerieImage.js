import placeholder from '../placeholder.jpg'

// funcion para validar si tiene imagen la api path
// pasamos tambien el width ancho de la imagen que deseemos
export function getSerieImage(path,width){
    return path
    // validamos por operador ternario si con tiene datos, me retorne iamgen mas el path y si no imagen
    ? `https://image.tmdb.org/t/p/w${width}/${path}`
    : placeholder
}