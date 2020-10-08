import React from 'react';


function Navbar () {
  return (
    <nav className="top-nav">
      <h2>Stock App</h2>
      <nav className="nav-right">
        <a href="/">Home</a>
        <a href="/news">Search</a>
      </nav>
    </nav>
  )
}

export default Navbar;