import './App.css';
import React from 'react';

//Importamos Route
import {Route} from "react-router-dom";

//Importamos Componentes
import Buscador from './Componentes/Buscador/Buscador.js';
import Favoritos from './Componentes/Favoritos/Favoritos.js';

function App() {
  return (
    <div className="App">
      {/* Nagvar */}
      {/* <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} /> */}
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favoritos} />
    </div>
  );
}

export default App;
