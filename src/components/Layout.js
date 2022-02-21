import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/layout.css";
import { Footer } from ".";

const Layout = () => {
  return (
    <main>
      <header className="header">
        <input className="checkbox__hack" type="checkbox" id="checkbox__hack" />
        <label
          htmlFor="checkbox__hack"
          className="checkbox-hack__label"
        ></label>
        <nav className="nav--top">
          <ul className="menu-lateral nav--top__list">
            <li className="menu-lateral__item">
              <Link to="/" className="link">
                Inicio
              </Link>
            </li>
            <li className="menu-lateral__item">
              <Link to="/aboutus" className="link">
                Sobre nosotros
              </Link>
            </li>
            <div>             
              <strong>Proyectos</strong> 
              <li className="menu-lateral__item">
                <Link to="/clothing" className="link">
                  Boutique
                </Link>
              </li>
              <li className="menu-lateral__item">
                <Link to="/jewerly" className="link">
                  Joyería
                </Link>
              </li>
              <li className="menu-lateral__item">
                <Link to="/tecnology" className="link">
                  Tecnología
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </header>
      <section>
        <Outlet />
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
