import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Features from "./Features";
import Pricing from "./Pricing";
import Resources from "./Resources";
import Login from "./Login";
import SingUp from "./SignUp";
import NoPage from "./NoPage";
import Layout from "./Layout";

const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <div className="navbar">
          <div className="nav_container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SingUp />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
