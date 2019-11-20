import React from "react";
import "./style.css";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
{/* Can change the names just putting in placeholders */}
      <a className="navbar navbarItem" href="/home">
        Home
      </a>
      <a className="navbar navbarItem" href="/">
        Sign In
      </a>
      <a className="navbar navbarItem" href="/dashboard">
        Dashboard
      </a>
    </nav>
  );
}

export default Nav;