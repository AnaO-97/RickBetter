import './App.css';
import axios from 'axios'
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav_SearchBar/Nav';
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
         {(pathname==="/home")? <Nav onSearch = {onSearch}/> : ""}

         <Routes>
            <Route path    = "/"
                   element = {<Form/>}>
            </Route>

            <Route path    = "/home"                   
                   element = {<Cards
                                    characters = {characters}
                                    onClose    = {onClose}/>}>               
            </Route>           
           
            <Route path    = "/about"
                   element = {<About/>}>
            </Route>

            <Route  path    ='/favorites'
                    element = {<Favorites onClose = {onClose}/>}>
               
            </Route>

            <Route path    = "/detail/:detailId"
                   element = {<Detail/>}>
            </Route>         
         </Routes>                
      </div>
   );
}

export default App;
