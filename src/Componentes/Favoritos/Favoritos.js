import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { eliminarPeliculaFavorita } from "../../Redus/actions";

export  class Favoritos extends Component{
    render(){
        return(
            <div>
                <h2>Peliculas Favoritas</h2>
                <ul>
                    {this.props.PeliculasFavoritas !== undefined ? this.props.PeliculasFavoritas.map((e) => {
                       return(
                            <li key={e.id}>
                                <Link to={`/movie/${e.id}`}>
                                    {e.title}
                                </Link>
                                <button onClick={
                                    () => this.props.eliminarPeliculaFavorita(e.id)}> X 
                                </button>
                            </li>
                       ) 
                    }) : 'No hay peliculas favoritas para mostrarte'}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        PeliculasFavoritas: state.PeliculasFavoritas
    }
}

export default connect(mapStateToProps, {eliminarPeliculaFavorita})(Favoritos)