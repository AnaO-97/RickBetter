import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
    
export default class Nav extends React.Component {
    constructor (props){
        super(props)
    }

    render (){
        return (
        <div className={styles.containerGeneral}>
            <div className={styles.subContainerA}>
                <NavLink to       = "/home"
                        className = {({isActive})=>(isActive?"active":undefined)}
                >
                    <button>HOME</button>
                </NavLink>          

                <NavLink to       =  "/about"
                        className = {({isActive})=>(isActive?"active":undefined)}
                >
                    <button>ABOUT CREATOR</button>
                </NavLink>
            </div>
            
            <div className={styles.subContainerB}>
                <div className={styles.subContainerC}>
                    <SearchBar onSearch={this.props.onSearch} />
                </div>

                <div className={styles.subContainerD}>
                    <NavLink to       = "/favorites"
                            className = {({isActive})=>(isActive?"active":undefined)}
                    >
                        <button>FAVORITES</button>
                    </NavLink>            
                </div>
            </div>
        </div>
        );
    }
}