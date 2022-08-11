import axios from "axios";

const BASE_REQUEST_URL = 'https://dummyjson.com/products';

export const fetchOrders = () => {
    return axios.get(`${BASE_REQUEST_URL}`).then((res) => res.data);
};