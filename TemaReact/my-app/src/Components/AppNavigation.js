import { red } from '@material-ui/core/colors';
import React from 'react';
import {NavLink} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom"



export default function AppNavigation() {
 

    
    
    return (
        
        <div className="navbox">
        <nav>
            <ul className="navboxitems">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/welcome">Welcome</Link>
                </li>
                <li>
                <Link to= "/products">Products</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
            </ul>
        </nav>
        </div>
    )
}