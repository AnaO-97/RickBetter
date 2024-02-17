import styles from "./Detail.module.css";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

export default function Detail(props){
    const [ character, setCharacter] = useState({});

    const { detailId } = useParams();
 
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('The character does not exist');
           }           
        });
        return setCharacter({});
    }, [ detailId ]);

    return (
    <div className = {styles.detailContainer}>   
        <div className = {styles.imgContainer}>
            <img src = "/mortyDetail.png"
                 alt = "Error img" 
            />            
        </div>    

        <div className = {styles.characterContainer}>
            <div className = {styles.nameImg}>
                <h3> CHARACTER {detailId}  </h3>
                {character.image  && 
                    <img src = { character.image } 
                        alt = "Error img"                     
                    />
                }  
            </div>
            
            <div className = {styles.informationContainer}>
                {character.name   && <h3>Name   : {character.name}       </h3>}
                {character.status && <h3>Status : {character.status}     </h3>}
                {character.species&& <h3>Species: {character.species}    </h3>}
                {character.gender && <h3>Gender : {character.gender}     </h3>}
                {character.origin && <h3>Origin : {character.origin.name}</h3>}
            </div>
        </div>
        
        <div className = {styles.imgContainer}>
            <img src = "/rickDetail.png"
                 alt = "Error img" 
            />            
        </div>       
    </div>);
}