import { useState } from "react";
import { Link } from "react-router-dom";
import open from "../assets/photo-1.png";
import close from "../assets/photo-2.png";

export default function Sidebar() {
 const[openMenu, setOpenMenu] = useState(false);

 return (
  <>
  <div className="toggle" onClick={() => setOpenMenu(!openMenu)}>
  <img src={openMenu ? close : open} alt="menu toggle" />   
  </div>

  <div className={`sidebar ${openMenu ? "show" : ""}`}>
  <Link to="/" onClick={() => setOpenMenu(false)}>Home</Link>
  <Link to="/services" onClick={() => setOpenMenu(false)}>Services</Link>
  <Link to="/about" onClick={() => setOpenMenu(false)}>About</Link>
  <Link to="/contact" onClick={() => setOpenMenu(false)} >Contact</Link>
  </div>
  </>
 );
}