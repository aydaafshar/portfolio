import React from "react";
import "./navbar.css";
import Logo from "../logo/logo.jpg";
import data from "./data";
import { IoColorPaletteOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav>
      <div className="container nav-container">
        <a href="index.html" className="nav-logo">
          <img src={Logo} alt="logo" />
        </a>
        <ul className="nav-menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme-icon">
          <IoColorPaletteOutline />
        </button>
      </div>
    </nav>
  );
}
