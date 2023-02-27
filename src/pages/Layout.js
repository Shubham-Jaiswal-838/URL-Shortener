import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Layout.css";
import Logo from "../assets/images/logo.svg";

function Layout() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="layout">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo"> 
          <img src={Logo} alt="logo" />
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/features"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Features
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/pricing"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/resources"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Resources
            </NavLink>
          </li>
          <hr className="line" />
          <div className="rightTab">
            <li className="nav-item">
              <NavLink
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/signup"
                activeClassName="active"
                className="nav-links sign-up-btn"
                onClick={handleClick}
              >
                Sign Up
              </NavLink>
              <NavLink
                to="/signup"
                activeClassName="active"
                className="nav-links sign-up-btn-non"
                onClick={handleClick}
              >
                Sign Up
              </NavLink>
            </li>
          </div>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Layout;
