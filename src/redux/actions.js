const ADD_WANTED    = 'ADD_WANTED';
const REMOVE_WANTED = 'REMOVE_WANTED';

const ADD_FAV    = 'ADD_FAV';
const REMOVE_FAV = 'REMOVE_FAV';

const FILTER = 'FILTER';
const ORDER  = 'ORDER';

export function addWanted (character){
    return({
        type    : ADD_WANTED,
        payload : character 
    });
}

export function removeWanted (id){
    return({
        type    : REMOVE_WANTED,
        payload : id
    });
}

export function addFav (character){
    return({
        type    : ADD_FAV,
        payload : character 
    });
}

export function removeFav (id){
    return({
        type    : REMOVE_FAV,
        payload : id
    });
}

export function filterCards (gender, pathname){
    return({
        type    : FILTER,
        payload : [ gender,pathname ]
    });
}

export function oderCards  (order, pathname){    
    return({
        type:    ORDER,
        payload: [ order, pathname ]
    });
}