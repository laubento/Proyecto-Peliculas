import React, { Component } from "react";

// Importamos el connect de redux.
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { mostrarPeliculasFavoritas, mostrarPeliculas } from "../../Redus/actions";

export class Buscador extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: ""
        }
    }

    render(){
        return(
            <div>
                <h2>Buscador</h2>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.mostrarPeliculas(this.state.title)
                    }}>
                    <label>Pelicula: </label>
                    <input 
                    type={"text"}
                    id="title"
                    autoComplete="off"
                    value={this.state.title}
                    onChange={(e) => this.setState({title: e.target.value})}
                    />
                    <div>
                        <button type="submit">Buscador</button>
                    </div>
                </form>
                <ul>
                    {console.log(this.props.PeliculasFavoritas)}
                    {this.props.Peliculas !== undefined ? this.props.Peliculas.map((e,i) => {
                        return(
                        <li key={i}>
                            <Link to={`/movie/${e.imdbId}`}>
                                {e.Title}
                            </Link>
                            <button onClick={() => {
                                for(var i = 0; i < this.props.PeliculasFavoritas.length; i++){
                                    if(this.props.PeliculasFavoritas[i].id === e.imdbId){return Error("Ya existe esa pelicula en favoritas")}
                                }
                                return this.props.mostrarPeliculasFavoritas({title: e.Title, id: e.imdbId})
                            }}>
                                Favoritas
                            </button>
                        </li>
                        )
                    }) : 'No hay nada pa mostrar'}
                </ul>
                <Link to={'/favs'}>pepe</Link>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        Peliculas: state.Peliculas,
        PeliculasFavoritas: state.PeliculasFavoritas
    }
}


export default connect(mapStateToProps, {mostrarPeliculasFavoritas, mostrarPeliculas})(Buscador)