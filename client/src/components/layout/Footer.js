import React from "react";
import "../../scss/Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="Footer">
      <h3>Banane und Avocado</h3>
      <h3>
        <span role="img" aria-label="banana">
          &#x1F34C;
        </span>{" "}
        &#x2661;{" "}
        <span role="img" aria-label="avocado">
          &#x1F951;
        </span>
      </h3>
      <h3>&copy;{new Date().getFullYear()}</h3>
      <p>
        <Link to="/edit">Manage Videos</Link>
      </p>
    </footer>
  );
}

export default Footer;
