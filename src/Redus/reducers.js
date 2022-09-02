import React from "react";


const initialState = {
    Peliculas: [],
    PeliculasFavoritas: [],
    PeliculaDetalle : {}
}

export default function reducer(state = initialState, actions){
    switch(actions.type){
        case "Mostrar_Peliculas":
            return({
                ...state,
                Peliculas: actions.payload.Search
            })
        case "Mostrar_Pelicula_Detalle":
            return({
                ...state,
                PeliculaDetalle: actions.payload
            })
        case "Mostrar_Peliculas_Favoritas":
        return({
            ...state,
            PeliculasFavoritas: state.PeliculasFavoritas.concat(actions.payload)
        })
        case "Eliminar_Pelicula_Favorita":
            return({
                ...state,
                PeliculasFavoritas: state.PeliculasFavoritas.filter((ele) => ele.id !== actions.payload)
            })
        default:
            return state;
    }
}