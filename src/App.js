import './App.css';
import axios from 'axios'
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/Nav_SearchBar/NavBar';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters,setCharacters] = useState([]);
   
   const {pathname} = useLocation(); 

   function onSearch(enteredId) { 
      let isCharacter = false;

      for (const character of characters) {
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
               setCharacters(() => [...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   }

   function onClose(closeCharacter) {
      setCharacters(characters.filter((character) => character.id !== parseInt(closeCharacter,10)))      
   }

   return (
      <div className='App'>                       
         {(pathname!=="/")
            ? <NavBar onSearch = {onSearch}
                      pathname = {pathname}
               /> 
            : ""         
         }

         <Routes>
            <Route exact path = "/"
                   element    = {<Form/>}>
            </Route>

            <Route exact path = "/home"                   
                   element    = {<Cards
                                    characters = {characters}
                                    onClose    = {onClose}/>}>               
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
