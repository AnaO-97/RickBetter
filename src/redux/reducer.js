const stateInicial = {
    myFavorites   : [],
    allCharacters : [],
};

export function reducer (state = stateInicial, action){
    const {type,payload} = action;

    switch (type) {
        case 'ADD_FAV':{
            const auxi = [...state.allCharacters, payload];
            return ({
                // ... state,
                allCharacters : auxi,
                myFavorites   : auxi
            });
        }
        
        case 'REMOVE_FAV':{
            let auxi = [...state.allCharacters].filter((personaje)=>{
                return (personaje.id !== parseInt(payload,10))                    
            });
                        
            return({
                ...state,
                myFavorites   : auxi,
                allCharacters : auxi,
            });
        }

        case 'FILTER':{
            const filtro = [...state.allCharacters]; 
            
            if(payload === "TODOS"){
                return({
                    ...state,
                    myFavorites   : filtro,
                });                
            }

            else{
                return({
                    ...state,
                    myFavorites   : filtro.filter((personaje)=>{
                            return(personaje.gender === payload)
                        }),
                });
            }
            
        }

        // case 'ORDER':{
        //     const ordenadoRow = [...state.allCharacters];
            
        //     const ordenado = ordenadoRow.sort((pA,pB)=>{
        //         if(payload === "A"){
        //             if(pA.id < pB.id) return -1;
        //             if(pA.id > pB.id) return  1;

        //             return 0;
        //         }
        //         if(payload === "B"){
        //             if(pA.id > pB.id) return -1;
        //             if(pA.id < pB.id) return  1;

        //             return 0;
        //         }                
        //     });
            
        //     return({
        //         ...state,
        //         myFavorites : ordenado
        //     });
        // }
    
        default:
            return({
                ...state
            });
    }
}