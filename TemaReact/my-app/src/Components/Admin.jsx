
import React from 'react';
import {fetchOrders} from "../service/api.Request";
import {useState, useEffect} from 'react';

import { Button } from "@material-ui/core";
import { Products } from '../views/Products';
import {makeStyles} from  "@material-ui/core";
import ProductCard from './ProductCard';
import { Routes, Route, Link, Router } from "react-router-dom";
import ProductsIndex from "./ProductsIndex"
import ProductEdit from './ProductEdit';


const useStyles = makeStyles(() => ({
 
  
}));

export const Admin = () => {
  
 
  
  

    return (
    <div>
      
      
      <Routes>
          <Route path="/" element={<ProductsIndex />} />
          <Route path="/new" element={<ProductEdit />} />
          <Route path=":id" element={<ProductEdit />} />
      
        </Routes>
        
  </div>
      
    )
    
   
  
}