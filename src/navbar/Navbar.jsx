import React from "react";
import "./navbar.css";
import Logo from "../logo/logo.jpg";
import data from "./data";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useModalContext } from "../context/moda-context";

export default function Navbar() {
  const { showModalHandler } = useModalContext();

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="logo" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={showModalHandler}>
          <IoColorPaletteOutline />
        </button>
      </div>
    </nav>
  );
}
