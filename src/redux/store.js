import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';

// esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(
    reducer,
    // esta línea es para poder hacer peticiones a un server
    composeEnhancer(applyMiddleware(thunk)) 
);
export default store;