import React from "react";
import logo from '../logo.svg'
import AppNavigation from "./AppNavigation";
import { makeStyles } from "@material-ui/core/styles";

const useStyles=makeStyles(()=>({
    Appheader:{
       width: '100%',
       height: '30%', 
       
    },
    Applogo:{
        width: '10%',
        height: '20%',
        float: 'left'
    }
}))
 export function AppHeader() {

    
    
    const classes = useStyles();
   
    return (
        <header className={classes.Appheader}>
            <img src={logo} className={classes.Applogo} alt={'logo'}/>
            <AppNavigation/>
        </header>
    )
    
}

