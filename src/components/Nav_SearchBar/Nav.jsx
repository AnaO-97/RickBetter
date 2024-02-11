import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
    
export default class Nav extends React.Component {
    constructor (props){
        super(props)
    }

    render (){
        return (
        <div>
            <SearchBar onSearch={this.props.onSearch} />
            <hr />            

            <NavLink to        =  "/about"
                     className = {({isActive})=>(isActive?"active":undefined)}
            >
                <button>ABOUT</button>
            </NavLink>


            <NavLink to        = "/favorites"
                     className = {({isActive})=>(isActive?"active":undefined)}>
                <button>FAVORITES</button>
            </NavLink>

            <NavLink to        = "/home"
                     className = {({isActive})=>(isActive?"active":undefined)}>
                <button>HOME</button>
            </NavLink>

            <hr />
        </div>
        );
    }
}