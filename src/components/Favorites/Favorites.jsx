import { Link }    from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { filterCards, oderCards } from "../../redux/actions"
import Card   from "../Card/Card";
import styleC from "../Cards/Cards.module.css"
import styleF from "./Favorites.modules.css"
import { useState } from "react";

function Favorites (props){
    const { myFavorites } = props;

    const dispatch = useDispatch();

    const  handleOrder = (evento) => {        
        const { value } = evento.target;
        dispatch(
            oderCards(value)
        );
    };

    const  handleFilter = (evento) => {
        const { value } = evento.target;
        dispatch(
            filterCards(value)
        )
    };

    return (
        <div>
            <h1>FAVORITES</h1>

            <select name     = "Orden"
                    onChange = { handleOrder }
            >
                <option value = "A"> Ascendente  </option>
                <option value = "B"> Descendente </option>
            </select>

            <select name     = "Generos"
                    onChange = { handleFilter }
            >
                <option value = "TODOS">      TODOS       </option>
                <option value = "Male">       Male        </option>
                <option value = "Female">     Female      </option>
                <option value = "Genderless"> Genderless  </option>
                <option value = "unknown">    unknown     </option>
            </select>
                        
            <div className = {styleC.contenedorCards}                 
            >
                {myFavorites.length && 
                    myFavorites.map((personaje)=> {       
                            return (
                                <Card 
                                    id      = {personaje.id}
                                    name    = {personaje.name}
                                    status  = {personaje.status}
                                    species = {personaje.species}
                                    gender  = {personaje.gender}
                                    // origin  = {personaje.origin.name}
                                    image   = {personaje.image}                     
                                    onClose = {props.onClose}
                                    key     = {personaje.id}
                            />
                            )                        
                        }
                    )
                }
            </div>        

            <div>
            <Link to="/home">
                <button>GO BACK!</button>
            </Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state) =>{
    return({
        myFavorites   : state.myFavorites,
        allCharacters : state.allCharacters,
    });
}

export default connect(
    mapStateToProps,
    null
)(Favorites);