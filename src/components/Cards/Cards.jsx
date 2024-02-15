import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {  
   const charactersWanted = useSelector((state)=>state.charactersWanted);

   return (      
      <div className = {style.contenedorCards}
      >
         {charactersWanted.length && 
            charactersWanted.map((personaje)=>
               (                  
                  <Card                      
                     id      = {personaje.id}
                     name    = {personaje.name}
                     status  = {personaje.status}
                     species = {personaje.species}
                     gender  = {personaje.gender}
                     origin  = {personaje.origin.name}
                     image   = {personaje.image}                     
                     onClose = {props.onClose}
                     key     = {personaje.id}
                  />                  
               )               
            )
         }
      </div>
   );

}