import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return(
        <header>
            <div>
                {/* aca va imagen */}
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to='/'>Home</NavLink> 
                        <NavLink to='/favs'>Favoritas</NavLink> 
                    </li>
                </ul>
            </nav>
        </header>
    )
}