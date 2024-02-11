import { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios";

export default function Detail(props){
    const [ character, setCharacter] = useState({});

    const {detailId} = useParams();
    // console.log(id);

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
           if (data.name) {
            //   console.log(`data, ${data.origin.name}`);
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }           
        });
        return setCharacter({});
    }, [detailId]);

    // console.log(`name   : ${character.name}`)
    // console.log(`statuts: ${character.status}`)
    // console.log(`species: ${character.species}`)
    // console.log(`gerder : ${character.gerder}`)
    // console.log(`origin : ${character.origin}`)
    // console.log(character)

    return (
        <div>
            <h1>
                DETAIL
            </h1>      
            <h2>
                PERSONAGE {detailId}  
            </h2>      

            <br />
            
            {/* //! Renderizado condicional */}
            {character.name   && <h3>{character.name}       </h3>}
            
            {character.status && <h3>{character.status}     </h3>}
            
            {character.species&& <h3>{character.species}    </h3>}
            
            {character.gender && <h3>{character.gender}     </h3>}
            
            {character.origin && <h3>{character.origin.name}</h3>}
        
            {character.image  && <img src   = {character.image} 
                                    alt   = "imagen no cargó" 
                                    width ="180px"
                                />
            }   

            <br />

            <Link to="/home">
                <button>GO BACK!</button>
            </Link>     
        </div>
    )
}