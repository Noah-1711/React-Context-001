import React, { useContext } from 'react'
import './Navbar.css'
import { Mycontext } from "../App";
import { Link } from 'react-router-dom';

const darkheader = { color: "#5ddbf7", backgroundColor: "#0f172a" };
const lightheader = { color: "#0f172a", backgroundColor: "#5ddbf7" };
const light = { color: "black", backgroundColor: "white", width: "100%" };
const darklinks = { color: "white" };
const lightlinks = { color: "black" };


export const Navbar = () => {
    const context = useContext(Mycontext);

  return (
    <div className='navbarcontainer'>
        <div className="alerttheme" style={context.theme ? light : light}>
        <p>
        I have changed theme to{" "}
        <a href="hello.com">{context.theme ? "Dark !!!" : "Light !!!"}</a>
      </p>
        </div>
  
    <div className="navbar" style={context.theme ? darkheader : lightheader}>
        <div className="navheading">
          <h2>Geekster</h2>
        </div>
        <div className="navlinks">
         
          <Link to="/" style={context.theme ? darklinks : lightlinks}>Home</Link>
          <Link to="/about" style={context.theme ? darklinks : lightlinks}>About</Link>
          <Link to="/services" style={context.theme ? darklinks : lightlinks}>Services</Link>
        </div>
      </div>
      </div>
  )
}
