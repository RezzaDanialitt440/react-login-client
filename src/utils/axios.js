import axios from 'axios';

const baseURL = process.env.REACT_APP_BE_URL;
let headers = {};

if(localStorage.token){
    headers.Authorization = `Bearer ${localStorage.token}`;
}

console.log("Base Url: " + baseURL);

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
});


export default axiosInstance;