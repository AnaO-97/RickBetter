import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Navbar.module.css";
import { filterCards, oderCards } from "../../redux/actions"
import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
    
export default function NavBar (props){
    const { onSearch, pathname } = props;
    const {  }
    
    const dispatch = useDispatch();

    const optionsSelects = (pathnameLocation) => {
        console.log(pathnameLocation);
        
    }

    const  handleOrder = (evento) => {        
        const { value } = evento.target;
        dispatch(
            oderCards(value)
        );
    }
    
    const  handleFilter = (evento) => {
        const { value } = evento.target;
        dispatch(
            filterCards(value)
        )
    }

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
                    <option value = "A"> Upward  </option>
                    <option value = "B"> Falling </option>
                </select>
            </div>
            
            <div className={styles.subContinerSelects}>
                <h4>FILTER</h4>
                <select name     = "Genders"
                        onChange = { handleFilter }
                >
                    <option value = "All">        All       </option>
                    <option value = "Male">       Male        </option>
                    <option value = "Female">     Female      </option>
                    <option value = "Genderless"> Genderless  </option>
                    <option value = "unknown">    unknown     </option>
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