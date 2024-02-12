import { useState } from "react";

export default function SearchBar(props) {
   let [idBuscar, setIdBuscar] = useState("");

   const handleChange = (event) =>{
      const idIngresado = event.target.value;
      setIdBuscar(idBuscar = idIngresado);
   }

   return (
      <div>
         <input 
            type     = 'search'         
            onChange = {handleChange}
            value    = {idBuscar}
         />         
         
         <button onClick={()=>props.onSearch(idBuscar)}>
            ADD
         </button>
         <button onClick={()=>props.onSearch(Math.floor(Math.random()*827))}>
            RANDOM
         </button>
      </div>
   );
}
