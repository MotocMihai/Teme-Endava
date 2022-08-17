import axios from "axios";

const BASE_REQUEST_URL = 'https://dummyjson.com/products';

export const fetchOrders = () => {
    return axios.get(`${BASE_REQUEST_URL}`).then((res) => res.data);
};

export const retrieveProduct = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (response.ok) {
      return await response.json();
    }
    throw new Error("something went wrong");
  };
  
  export const createProduct = async (payload) => {
    const response = await fetch(`https://dummyjson.com/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Something went wrong");
  };


  export const updateProduct = async (payload) => {
    const response = await fetch(`https://dummyjson.com/products/${payload.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Something went wrong");
  };
  
  export const deleteProduct = async (id) => {
    const response = fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      return await response.json();
    }
    throw new Error("Something went wrong");
  };