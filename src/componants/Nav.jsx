import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import "../Styles/nav.css";
export default function Nav() {
  let [homeFlag, setHomeFlag] = useState(false);
  let [whoFlag, setWhoFlag] = useState(false);
  let [servicesFlag, setServicesFlag] = useState(false);
  let [contactFlag, setContactFlag] = useState(false);
  let [projectsFlag, setProjectsFlag] = useState(false);

  let toggler = useRef(null);

  function be_active(e) {
    setContactFlag(false);
    setProjectsFlag(false);
    setServicesFlag(false);
    setWhoFlag(false);
    setHomeFlag(false);
    if (e.target.innerHTML === "الرئيسية") {
      setHomeFlag(true);
    } else if (e.target.innerHTML === "من أنا") {
      setWhoFlag(true);
    } else if (e.target.innerHTML === "الخدمات") {
      setServicesFlag(true);
    } else if (e.target.innerHTML === "المشاريع") {
      setProjectsFlag(true);
    } else if (e.target.innerHTML === "تواصل معي") {
      setContactFlag(true);
    }
  }
  return (
    <div className="container-fluid  nav-container">
      <nav className="navbar navbar-expand-lg bg-white px-4 shadow shadow-sm nav-style">
        <a className="navbar-brand fw-bold logo text-center m-0" href="#main">
          <p>لوجو</p>
          <span>منصه تعلبمبه</span>
        </a>
        <button
          ref={toggler}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse w-100"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                onClick={(e) => {
                  toggler.current.click();
                  be_active(e);
                }}
                className={`nav-link fw-semibold fs-6 me-4 ${
                  homeFlag ? "active" : ""
                }`}
              
                to="main"
                spy={true}
                smooth={true}
                offset={20}
                duration={200}
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={(e) => {
                  toggler.current.click();
                  be_active(e);
                }}
                className={`nav-link fw-semibold fs-6 me-4 ${
                  whoFlag ? "active" : ""
                }`}
            
                to="who"
                spy={true}
                smooth={true}
                offset={-80}
                duration={200}
              >
               المواد
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={(e) => {
                  toggler.current.click();
                  be_active(e);
                }}
                className={`nav-link fw-semibold fs-6 me-4 ${
                  servicesFlag ? "active" : ""
                }`}
               
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
                duration={200}
              >
                المدرسين
              </Link>
            </li>
           
            <li className="nav-item">
              <Link
                onClick={(e) => {
                  toggler.current.click();
                  be_active(e);
                }}
                className={`nav-link fw-semibold fs-6 me-4 ${
                  contactFlag ? "active" : ""
                }`}
        
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={200}
              >
            تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
