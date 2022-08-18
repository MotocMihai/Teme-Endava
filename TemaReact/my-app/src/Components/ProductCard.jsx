import React from "react";
import {Link} from "react-router-dom"

const ProductCard = ({products})=>{
    return (
        <div>

        
        <Link to ={`${products.id}`}>
            <div>{products.title}
            </div>
        </Link>

        </div>
    )


}
export default ProductCard