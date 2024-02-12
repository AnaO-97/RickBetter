import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { removeFav, addFav } from "../../redux/actions";
import style from "./Card.module.css"

function Card(props) {
  let [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=>{
      if(isFav){
         setIsFav(false);
         props.removeFav(props.id);
      }
      else if(!isFav){
         setIsFav(true);
         props.addFav(props)
      }
   }

   const handleButtonClose = ()=>{
      props.onClose(props.id);
      props.removeFav(props.id);
   }

   useEffect (()=>{            
      props.myFavorites.map((cardFavorita)=>{         
         if(cardFavorita.id === props.id)
            setIsFav(true);            
      })
   },[props.myFavorites])

   return (      
   <div  className = {style.card}>
      <div className = {style.header}>         
         {
            isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         }         
         <h4>{props.id}</h4>
         <button onClick={handleButtonClose}>X</button>
         
      </div>

      <div className={style.content}>
         <div className={style.nameCard}>
            <Link to={`/detail/${props.id}`}>
               <h4> {props.name}     </h4>
            </Link>            
         </div>

         <img src   = {props.image} 
               alt   = "Error" 
               width = "100px"
         />
      </div>

      <div className={style.footer}>
         <h4> {props.species} </h4>
         /
         <h4> {props.gender}  </h4>
      </div>
   </div>
   );
}

const mapStateToProps = (state) => {
   return({
      myFavorites : state.myFavorites
   });
}

const mapDispatchToProps = (dispatch) =>{
   return({
      addFav    : (personaje)=>{dispatch(addFav(personaje))},
      removeFav : (id)=>{dispatch(removeFav(id))}
   })
};

export default connect (   
   mapStateToProps,
   mapDispatchToProps
)(Card);