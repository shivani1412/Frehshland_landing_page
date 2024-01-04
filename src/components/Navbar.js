import React, { useState } from "react";
import logo from "./assets/img/freshlandnavbarlogo.png";

function Navbar() {
  const [navlink, setNavlink] = useState(false);

  const handlenavclick = () => {
    setNavlink(true);
  };
  const handlenavclose = () => {
    setNavlink(false);
  };
  return (
    <>
      
       
        <div className="navbarheader">
          <div className="left-section">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <ul className="nav-links ">
              <li >
                <a href="frehland" className="text-dark">
                  store<i className="bi bi-chevron-down"></i>
                </a>
              </li>
              <li>
                <a href="frehland" className="text-dark">season overview</a>
              </li>
              <li>
                <a href="frehland" className="text-dark">farmers</a>
              </li>
              <li>
                <a href="frehland" className="text-dark">faq</a>
              </li>
              <li>
                <a href="frehland" className="text-dark">About us</a>
              </li>
              <li>
                <a href="frehland" className="text-dark">media</a>
              </li>
            </ul>
            {navlink && (
              <ul className="nav-links navmenu">
                <i class="bi bi-x" onClick={handlenavclose}></i>
                <li>
                  <a href="frehland">
                    store<i className="bi bi-chevron-down"></i>
                  </a>
                </li>
                <li>
                  <a href="frehland">season overview</a>
                </li>
                <li>
                  <a href="frehland">farmers</a>
                </li>
                <li>
                  <a href="frehland">faq</a>
                </li>
                <li>
                  <a href="frehland">About us</a>
                </li>
                <li>
                  <a href="frehland">media</a>
                </li>
              </ul>
            )}
          </div>
          <div className="right-section">
            <div className="icon">
              <i className="bi bi-cart text-dark" ></i>
            </div>
            <div className="icon">
              <i className="bi bi-person-circle text-dark"></i>
            </div>
            <div className="icon">
              <i className="bi bi-search text-dark"></i>
            </div>
            <div className=" navicon">
              <i className="bi bi-list icon text-dark" onClick={handlenavclick}></i>
            </div>
          </div>
        </div>
        
      
    </>
  );
}

export default Navbar;
