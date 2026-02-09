import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/thom.png";

export const StyleNavabr = () => {
  return (
    <div className="header" id="header">
      <ul className="nav">
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            <img src={logo} alt="thom" className="header__logo" />
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/about" id="#about" className="nav__link">
            about us
          </NavLink>{" "}
        </li>
        <li className="nav__item">
          <NavLink
            to="/contact"
            id="#contact"
            className="nav__link nav__contact "
          >
            contact
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/gallery"
            id="#gallery"
            className="nav__link nav__gallery "
          >
            gallery
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/login" id="#login" className="nav__link nav__login ">
            login
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
