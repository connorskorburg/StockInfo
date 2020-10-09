import React from 'react';
import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav className="top-nav">
      <h2>Stock App</h2>
      <ul className="nav-right">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/search">Search</Link>
      </ul>
    </nav>
  )
}

export default Navbar;