import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    color: "Black",
    fontWeight: 500,
    textDecoration: 'none'
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3 className="nav-logo">Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>
        <Link style={navStyle} to="/sign-up">
          <li>Sign Up</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
