const ADD_FAV    = 'ADD_FAV';
const REMOVE_FAV = 'REMOVE_FAV';

const FILTER = 'FILTER';
const ORDER  = 'ORDER';


export function addFav (personaje){
    return({
        type    : ADD_FAV,
        payload : personaje 
    });
}

export function removeFav (id){
    return({
        type    : REMOVE_FAV,
        payload : id
    });
}

export function filterCards (gender){
    return({
        type    : FILTER,
        payload : gender
    });
}

export function oderCards  (order){    
    return({
        type:    ORDER,
        payload: order
    });
}