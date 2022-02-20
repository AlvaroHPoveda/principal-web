import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/layout.css";
import { Footer } from ".";

const Layout = () => {
  return (
    <main>
      <nav>
        <input type="checkbox" id="menu" />
        <label htmlFor="menu">
          <FontAwesomeIcon icon={faBurger} />
        </label>
        <ul>
          <li>
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/aboutus" className="link">
              Sobre nosotros
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/clothing" className="link">
              Boutique
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/jewerly" className="link">
              Joyería
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/tecnology" className="link">
              Tecnología
            </Link>
          </li>
          <li>
            {" "}
            <input type="checkbox" id="menu" />
            <label htmlFor="menu">
              <FontAwesomeIcon icon={faXmarkCircle} />
            </label>
          </li>
        </ul>
      </nav>
      <section>
        <Outlet />
        <Footer/>
      </section>
    </main>
  );
};

export default Layout;
