import { connect } from "react-redux";
import Card   from "../Card/Card";
import styleC from "../Cards/Cards.module.css"

function Favorites (props){
    const { myFavorites } = props;

    return (
    <div className = {styleC.contenedorCards}>
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
    </div>);
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