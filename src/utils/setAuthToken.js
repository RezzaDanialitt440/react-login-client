import axios from 'axios';

//Setting default interceptor
const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken