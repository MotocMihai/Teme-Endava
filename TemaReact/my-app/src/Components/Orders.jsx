
import React from 'react';

export const Orders = ({cart,setCart,handleChange}) => {

    


    return (
        <article>
          {cart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                
                <p>{item.title}</p>
              </div>
              
              
            </div>
          ))}
          
        </article>
      );
    };
