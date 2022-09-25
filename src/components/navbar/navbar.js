import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../img/unnamed-removebg-preview.png";
import av from "../../img/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg";
function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <>
      <div className={`navbar ${show && "nav_black"}`}>
        <img src={logo} alt="logo" />
        <img src={av} alt="logo" />
      </div>
    </>
  );
}

export default Navbar;
