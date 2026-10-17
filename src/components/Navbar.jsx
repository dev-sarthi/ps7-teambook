import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="app-navbar">
      <NavLink className="app-navbar-link" to="/">
        Home
      </NavLink>
      <NavLink className="app-navbar-link" to="/employees">
        Employees
      </NavLink>
    </nav>
  );
}

export default Navbar;
