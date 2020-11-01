import React, { useState,useEffect} from 'react';
import {TextField, Container} from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios'


const Dashboard = () => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3DB9E9',
      },
    },
  });

    const [usernames, setUsernames] = useState([]);

    useEffect(() => {
        console.log("OnInit");
        getUsername();
      }, []);

    const getUsername = () => {

        const token = localStorage.getItem('token')
        const bearerToken = 'Bearer ' + token

        axios.get('/api/users/retrieve-all',{
          headers: {
            Authorization: bearerToken,
          }
        }).then((resp) => {
            setUsernames(resp.data)
           })
    }

    return ( 
      <Container maxWidth="sm">
        <div className="autocompleteDashboard" >
        <Autocomplete
        id="combo-box-demo"
        options={usernames}
        getOptionLabel={(option) => option.name}
        style={{ width: 400 }}
        renderInput={(params) => (
          <ThemeProvider theme={theme}>
          <TextField {...params} color="primary" label="Search User" variant="outlined" />
          </ThemeProvider>
        )}
      />
        </div>

      </Container>
     );
}
 
export default Dashboard;