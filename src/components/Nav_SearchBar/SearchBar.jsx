import { useState } from "react";

export default function SearchBar(props) {
   let [idBuscar, setIdBuscar] = useState("");

   const handleChange = (event) =>{
      const idIngresado = event.target.value;
      // console.log(idIngresado);

      setIdBuscar(idBuscar = idIngresado);
   }

   return (
      <div>
         <input 
            type     = 'search'
            onChange = {handleChange}
            value    = {idBuscar}
         />         
         
         <button onClick={()=>props.onSearch(idBuscar)}>Agregar</button>

         <button onClick={()=>props.onSearch(Math.floor(Math.random()*827))}>Aleatorio</button>
      </div>
   );
}
