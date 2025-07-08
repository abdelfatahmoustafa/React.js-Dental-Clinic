import "./Navbar.css";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaTooth } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <FaTooth className="nav-logo" />
        <span className="nav-title">Dr. Suaad Dental Care</span>
      </div>
      
      <HiMenu className="nav-mob-open" onClick={openMenu} />
      
      <ul className="nav-menu" ref={menuRef}>
        <HiX className="nav-mob-close" onClick={closeMenu} />
        
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <AnchorLink className="anchor" href="#home">Home</AnchorLink>
        </li>
        
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
          <AnchorLink className="anchor" offset={50} href="#about">About</AnchorLink>
        </li>
        
        <li onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>
          <AnchorLink className="anchor" offset={50} href="#services">Services</AnchorLink>
        </li>
        
        <li onClick={() => setMenu("testimonials")} className={menu === "testimonials" ? "active" : ""}>
          <AnchorLink className="anchor" offset={50} href="#testimonials">Testimonials</AnchorLink>
        </li>
        
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
          <AnchorLink className="anchor" offset={50} href="#contact">Contact</AnchorLink>
        </li>
      </ul>

      <div className="nav-cta">
        <AnchorLink className="btn-appointment" offset={50} href="#appointment">
          Book Appointment
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
