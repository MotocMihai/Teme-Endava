import './App.css';
import {Welcome} from "./Components/Welcome";
import {useState} from "react";
import {Input} from "@material-ui/core";
import { Products } from "./views/Products";
import { blue } from '@material-ui/core/colors';
import {makeStyles} from "@material-ui/core";
import{AppHeader} from "./Components/AppHeader"
import {BrowserRouter as Router, Switch, Route, Link, Routes} from "react-router-dom";




function App() {
  


 
  return (
    <Router>
        
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

            <Routes>
                <Route path="/">

                </Route>
                <Route path="/welcome" element={<Welcome/>}>
                      
                </Route>
                <Route path ="/products" element={<Products/>}>
                   
                </Route>
                
                <Route path ="/orders" ></Route>
                
            </Routes>
        </div>      
          
       
      
    </Router>
  );
}

export default App;