import React from "react";
import AboutImg from "../logo/about.jpg";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Card from "../components/Card";
import data from "./data";
import "./about.css";
export default function About() {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-left">
          <div className="about-pf">
            <img src={AboutImg} alt="About Image" />
          </div>
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <div className="about-cards">
            {data.map((item) => (
              <Card key={item.id} className="about-card">
                <span className="about-card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            voluptates deserunt obcaecati temporibus facilis nam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni id
            perferendis ipsum et molestias inventore aliquid vero autem aliquam
            est!
          </p>
          <a href="#" download className="btn primary">
            Download CV <IoCloudDownloadOutline />
          </a>
        </div>
      </div>
    </section>
  );
}
