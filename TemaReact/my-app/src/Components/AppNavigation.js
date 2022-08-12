import { red } from '@material-ui/core/colors';
import React from 'react';
import {NavLink} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";


const useStyles=makeStyles(()=>({
    paragraph:{
       width:'100%',
       height:'100%',
       float: 'buttom'

       
    },
}))

export default function AppNavigation() {
 

    
    const classes = useStyles();
   
    return (
        
            <nav>
           
                <p className={classes.paragraph}>123</p>
            </nav>
        
    )
}