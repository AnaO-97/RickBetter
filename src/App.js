import './App.css';
import axios from 'axios'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { addWanted, removeWanted } from './redux/actions';
import NavBar from './components/Nav_SearchBar/NavBar';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [charactersWanted,setCharactersWanted] = useState([]);
   
   const {pathname} = useLocation(); 
   const dispatch = useDispatch();

   function onSearch(enteredId) { 
      let isCharacter = false;

      for (const character of charactersWanted) {
         if(character.id === parseInt(enteredId)){
            isCharacter = true;       
         }
      }

      if(isCharacter){
         window.alert('¡El personaje ya existe, intente con otro identificador!');
      }
      else{
         axios(`https://rickandmortyapi.com/api/character/${enteredId}`).then(({ data }) => {
            if (data.name) {
               dispatch(addWanted(data))
               setCharactersWanted(() => [...charactersWanted, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   }

   function onClose(idCharacter) {
      dispatch(removeWanted(idCharacter));
      setCharactersWanted(charactersWanted.filter((character) => character.id !== parseInt(idCharacter,10)))      
   }

   return (
      <div className='App'>                       
         {(pathname!=="/")
            ? <NavBar onSearch = {onSearch}
                      pathname = {pathname}
                      charactersWanted = {charactersWanted}
               /> 
            : ""         
         }

         <Routes>
            <Route exact path = "/"
                   element    = {<Form/>}>
            </Route>

            <Route exact path = "/home"                   
                   element    = {<Cards
                                    onClose          = {onClose}
                                    charactersWanted = {charactersWanted} />}>
            </Route>           
           
            <Route exact path = "/about"
                   element    = {<About/>}>
            </Route>

            <Route  exact path ='/favorites'
                    element    = {<Favorites onClose = {onClose}/>}>
               
            </Route>

            <Route exact path = "/detail/:detailId"
                   element    = {<Detail/>}>
            </Route>         
         </Routes>                
      </div>
   );
}

export default App;
