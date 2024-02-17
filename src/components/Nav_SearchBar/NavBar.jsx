import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import styles from "./Navbar.module.css";
import { filterCards, oderCards } from "../../redux/actions"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
    
export default function NavBar (props){   
    const dispatch = useDispatch();
    
    const { onSearch, pathname } = props;
    
    let [optionsFilter, setOptionsFilter] = useState([]);

    const characters = useSelector((state)=>{
        if(pathname === "/home")
            return state.auxiWanted;
        if(pathname === "/favorites")
            return state.auxiFavorites;
    });

    const optionsSelects = ()=>{
        let auxiliary = []
        let optionsRaw = [];        
        if(characters.length > 0){
            characters.forEach((character)=>{                
                optionsRaw.push(character.gender);
            })
        }
        auxiliary = new Set(optionsRaw);
        setOptionsFilter( [...auxiliary] );
    }    

    const  handleOrder = (evento) => {        
        const { value } = evento.target;
        dispatch(oderCards(value, pathname));
    }
    
    const  handleFilter = (evento) => {
        const { value } = evento.target;
        dispatch(filterCards(value, pathname));
    }

    useEffect(()=>{        
        if(pathname === "/home" || pathname === "/favorites"){
            optionsSelects();
        }
    },[pathname, characters])

    return (
    <div className={styles.containerGeneral}>
        <div className={styles.subContainerA}>
            <NavLink to = "/home">
                <button className = {pathname=== "/home" ?styles.displayNone :""}>HOME</button>
            </NavLink> 

            <NavLink to = "/favorites">
                <button className = {pathname=== "/favorites" ?styles.displayNone :""}>❤️FAVORITES❤️</button>
            </NavLink>
        </div>

        <div className={pathname !== "/home" ?styles.displayNone :styles.subContainerB}
        >
            <h4>SEARCH</h4>
            <SearchBar onSearch={onSearch} />
        </div>

        <div className={pathname === "/home" || pathname === "/favorites" ?styles.subContainerC :styles.displayNone}>
            <div className={styles.containerSelects}>
                <h4>ORDER</h4>
                <select name     = "Order"
                        onChange = { handleOrder }
                >
                    <option value = "N/A"> N/A  </option>
                    <option value = "Upward"> Upward  </option>
                    <option value = "Falling"> Falling </option>
                </select>
            </div>
            
            <div className={styles.subContinerSelects}>
                <h4>FILTER</h4>
                <select name     = "Genders"
                        onChange = { handleFilter }
                >
                    <option value = "All">        All       </option>
                    {
                        optionsFilter.map((gender, index)=>(
                                    <option key={index}  value = {gender}> 
                                        {gender[0].toUpperCase() + gender.substring(1)} 
                                    </option> 
                                )
                            )
                        
                    }                   
                </select>
            </div>
        </div>

        <div className={styles.subContainerD}>
            <NavLink to =  "/about" >
                <button className = {pathname=== "/about" ?styles.displayNone :""}>ABOUT CREATOR</button>
            </NavLink>

            <NavLink to = "/">
                <button className={styles.btnGoOut}>GO OUT</button>
            </NavLink>            
        </div>
    </div>);
}