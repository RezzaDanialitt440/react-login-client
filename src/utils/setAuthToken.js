import axios from 'axios';

//Setting default interceptor
const setAuthToken = token => {
    if(token) {
        const bearerToken = 'Bearer ' + token
        axios.defaults.headers.common['Authorization'] = bearerToken;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken