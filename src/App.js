import './App.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { addWanted, removeWanted } from './redux/actions';
import NavBar from './components/Nav_SearchBar/NavBar';
import Form from './components/Form/Form';
import Cards from './components/Cards/Cards';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';

function App() {
   const charactersWanted = useSelector((state)=>state.charactersWanted);
   
   const { pathname } = useLocation(); 
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
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }
   }

   function onClose(idCharacter) {
      dispatch(removeWanted(idCharacter));
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
                                    onClose = {onClose}/>}>
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
