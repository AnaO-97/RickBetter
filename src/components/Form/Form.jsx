import { useEffect, useState } from "react";
import style from "./Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import DialogBoxLogin from "./DialogBox";
import { login } from "./functions";
import validation from "./validation";

export default function Form (props){
    const navigate   = useNavigate();

    const [userData,setUserData] = useState({
        email    : "",
        password : ""        
    })

    const [errors,setErrors] = useState({
        email    : "",
        password : ""
    })

    const handleChange = (event)=>{
        const property = event.target.name;
        const value    = event.target.value;

        setUserData({
            ...userData,
            [property]:value
        })

        setErrors(
            validation({
                ...userData,
                [property]:value
            })
        )
    }  

    const handleSubmit = (event)=>{
        event.preventDefault();       
        
        const errosKeys = Object.values(errors);

        if(!errosKeys.length){
          alert('Excellent, complete information');
          setUserData({
            email    : "",
            password : ""      
          })
          setErrors({
            email    : "",
            password : ""      
          })
          
          if (login(userData))
                navigate('/home');
          else{
                <DialogBoxLogin/>
                alert("Temporarily register")
                navigate('/home');
            }
        }
        else{
          alert(`${errosKeys}`)
        }
        
    }

    return (
        <div className={style.containerLanding}>  
            <form onSubmit={handleSubmit}>                
                <div className={style.containerGeneral}>
                    <div className={style.subContainer}>
                        <div className={style.containerTag}>
                            <label htmlFor="email">E-mail:</label>
                        </div>
                        <div className={style.containerTag}>
                            <input type      = "text" 
                                name         = "email"                     
                                autoComplete = "off"
                                placeholder  = "E-mail..."
                                onChange     = {handleChange}
                                value        = {userData.email}  
                            />
                            <p>{(errors.email) && errors.email}</p> 
                        </div>
                    </div>
                    
                    <div className={style.subContainer}>
                        <div className={style.containerTag}>
                            <label htmlFor="password">Password:</label>
                        </div>
                        <div className={style.containerTag}>
                            <input type      = "password" 
                                name         = "password"
                                autoComplete = "off"
                                placeholder  = "Password..."
                                onChange     = {handleChange}
                                value        = {userData.password}
                            />
                            <p>{(errors.password) && errors.password}</p>
                        </div>
                    </div>                    
                </div>
                
                <button type = 'submit'>Enviar</button>
            </form>                                             
        </div>
    )
}