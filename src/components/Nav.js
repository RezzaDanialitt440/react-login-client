import React from "react";
import { Link } from "react-router-dom";
import {  AppBar, Toolbar, Button, Typography  } from '@material-ui/core'

const Nav = () => {

  const navStyle = {
    textDecoration: 'none'
  };
  
  return (
    <div style={{width: "100%"}}>
      <AppBar position="static">
      <Toolbar>
        <Link style={navStyle} to="/">
          <Typography variant="h6" color="textPrimary">LOGO</Typography>
        </Link>
        <ul className="nav-links">
          <Link style={navStyle} to="/login">
            <Button size="large">
                <Typography variant="h6">Login</Typography>
            </Button>
          </Link>
          <Link style={navStyle} to="/sign-up">
            <Button size="large">
                <Typography variant="h6">Sign Up</Typography>
            </Button>
          </Link>
        </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
