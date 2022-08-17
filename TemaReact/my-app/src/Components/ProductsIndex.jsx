

import React, { useState, useEffect } from "react";
import {fetchOrders} from "../service/api.Request";
import ProductCard from "./ProductCard";

const ProductsIndex = () => {
  
  const [products, setProducts] = useState(null);
  useEffect(() => {
    (async () => {
      const data = await fetchOrders();
      setProducts(data);
      console.log(data);
    })();
  }, []);

  if (products === null) {
    return <div>Loading ....</div>;
  }

  

  return (
    <div>
      {products?.products.map((item) => (
        <ProductCard key={item.id} products={item}/>
      ))}
    </div>
  );
};

export default ProductsIndex;