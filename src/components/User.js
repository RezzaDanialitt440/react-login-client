import React, { useState,useEffect} from 'react';
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios'


const UserPage = () => {

    const [usernames, setUsernames] = useState([]);

    useEffect(() => {
        console.log("OnInit");
        getUsername();
      }, []);

    const getUsername = () => {
        const token = sessionStorage.getItem('token')
        axios.get('http://localhost:4000/api/users/', {
            headers: {
              Authorization: token //the token is a variable which holds the token
            }
           }).then((resp) => {
            setUsernames(resp.data)
           })
    }

    return ( 
        <Autocomplete
        id="combo-box-demo"
        options={usernames}
        getOptionLabel={(option) => option.name}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
     );
}
 
export default UserPage;