import React from "react";
import "../../scss/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <h2>Jana&nbsp;Bazzanella</h2>
      </Link>
    </nav>
  );
}

export default Navbar;
