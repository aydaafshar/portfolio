import React from "react";
import Card from "../components/Card";

export default function Testemonial({ testemonial }) {
  return (
    <Card className="light">
      <p>{testemonial.quote}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <img src={testemonial.avatar} alt="Testimonial Avatar" />
        </div>
        <div className="testimonial__client-details">
          <h6>{testemonial.name}</h6>
          <small>{testemonial.profession}</small>
        </div>
      </div>
    </Card>
  );
}
