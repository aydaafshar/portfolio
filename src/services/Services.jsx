import React from "react";
import data from "./data";
import "./services.css";
import Card from "../components/Card";
export default function Services() {
  return (
    <section id="services">
      <h2>My Services</h2>
      <p>I give you the best in all services below</p>
      <div className="container ser-container">
        {data.map((item) => (
          <Card key={item.id} className="services light">
            <div className="ser-icon">{item.icon}</div>
            <div className="ser-details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
