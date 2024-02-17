const stateInicial = {
    auxiWanted       : [],
    charactersWanted : [],
    myFavorites   : [],
    auxiFavorites : [],
};

export function reducer (state = stateInicial, action){
    const { type, payload } = action;

    switch (type) {
        case 'ADD_WANTED':{
            const auxi = [...state.auxiWanted, payload];
            return ({
                ...state,
                auxiWanted : auxi,
                charactersWanted : auxi
            });
        }

        case 'ADD_FAV':{
            const auxi = [...state.auxiFavorites, payload];
            return ({
                ...state,
                auxiFavorites : auxi,
                myFavorites   : auxi
            });
        }
        
        case 'REMOVE_FAV':{
            let auxi = [...state.auxiFavorites].filter((personaje)=>{
                return (personaje.id !== parseInt(payload,10))                    
            });
                        
            return({
                ...state,
                myFavorites   : auxi,
                auxiFavorites : auxi,
            });
        }

        case 'REMOVE_WANTED':{
            let auxi = [...state.auxiWanted].filter((personaje)=>{
                return (personaje.id !== parseInt(payload,10))                    
            });
                        
            return({
                ...state,
                auxiWanted       : auxi,
                charactersWanted : auxi,
            });
        }

        case 'FILTER':{
            let nameAuxi = "";
            let nameCharacters = "";
            const [ gender, pathname ] = payload;
           
            if(pathname === "/home"){
                nameAuxi = "auxiWanted";
                nameCharacters = "charactersWanted";
            }

            if(pathname === "/favorites"){
                nameAuxi = "auxiFavorites";
                nameCharacters = "myFavorites";
            } 

            let filterArray = [...state[nameAuxi]];            
            
            if(gender === "All"){                
                return({
                    ...state,
                    [ nameCharacters ] : filterArray,
                });                
            }
            
            else{
                filterArray = filterArray.filter((character)=>{
                    return character.gender === gender
                })                
                return({
                    ...state,
                    [ nameCharacters ] : filterArray
                });           
            }
        }

        case 'ORDER':{
            let nameAuxi = "";
            let nameCharacters = "";
            const [ orderBy, pathname ] = payload;

            if(pathname === "/home"){
                nameAuxi = "auxiWanted";
                nameCharacters = "charactersWanted";
            }

            if(pathname === "/favorites"){
                nameAuxi = "auxiFavorites";
                nameCharacters = "myFavorites";
            }            

            const orderRaw = [...state[ nameAuxi ]];
        
            const order = (orderBy !== "N/A" 
                ? orderRaw.sort((pA,pB)=>{                
                        if(orderBy === "Upward"){
                            if(pA.id < pB.id) return -1;
                            if(pA.id > pB.id) return  1;

                            return 0;
                        }
                        if(orderBy === "Falling"){
                            if(pA.id > pB.id) return -1;
                            if(pA.id < pB.id) return  1;

                            return 0;
                        }            
                        return 0;
                    })
                :  [ ...state[ nameCharacters ] ]
            )
            
            return({
                ...state,
                [ nameCharacters ] : order
            });
        }
    
        default:
            return({
                ...state
        });
    }
}