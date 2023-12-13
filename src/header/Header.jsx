import React from "react";
import HeaderImg from "../logo/header.jpg";
import data from "./data";
import "./header.css";
export default function Header() {
  return (
    <header id="header">
      <div className="container header-container">
        <div className="header-pf">
          <img src={HeaderImg} alt="header porfile" />
        </div>
        <h3>Ayda Afshar</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
          dolorem labore atque suscipit distinctio. Distinctio asperiores
          suscipit laborum esse libero?
        </p>
        <div className="header-cta">
          <a href="#contact" className="btn primary">
            Let's talk
          </a>
          <a href="#portfolio" className="btn light">
            My work
          </a>
        </div>
        <div className="header-socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="nooener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
