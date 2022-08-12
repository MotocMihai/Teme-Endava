import './App.css';
import {Welcome} from "./Components/Welcome";
import {useState} from "react";
import {CardActionArea, Input} from "@material-ui/core";
import { Products } from "./views/Products";
import { blue } from '@material-ui/core/colors';
import {makeStyles} from "@material-ui/core";
import{AppHeader} from "./Components/AppHeader"
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";
import {Orders} from "../src/Components/Orders"




function App() {
    const[cart,setCart]=useState([]);

const handleClick=(item) => {
    if(CardActionArea.indexOf(item)!== -1) return;
    setCart([...cart,item]) ;
};
  
  return (
    <Router>
        <AppHeader/>
          <Routes>
                <Route path="/"></Route>
                <Route path="/welcome" element={<Welcome/>}></Route>
                <Route path ="/products" element={<Products handleClick={handleClick}/>}></Route>
                <Route path ="/orders" element={<Orders />} ></Route> 
            </Routes>
    </Router>
  );
}

export default App;