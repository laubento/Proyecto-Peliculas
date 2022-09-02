const APIKEY = '96eea684'

export function mostrarPeliculas(titulo){
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&s=` + titulo)
        .then(data => data.json())
        .then(json => {
            dispatch({type: "Mostrar_Peliculas", payload: json})
        })
        .catch(err => console.log(err))
    }
}

export function mostrarPeliculaEnDetalle(idMovie){
    return function(dispatch){
        return fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&i=${idMovie}`)
        .then(data => data.json())
        .then(json => {
            dispatch({type: "Mostrar_Pelicula_Detalle", payload: json})
        })
    }
}

export function mostrarPeliculasFavoritas(payload){
    return {type: "Mostrar_Peliculas_Favoritas", payload}
}

export function eliminarPeliculaFavorita(payload){
    return {type: "Eliminar_Pelicula_Favorita", payload}
}   