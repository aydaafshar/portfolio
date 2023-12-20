import React from "react";
import faqs from "./data";
import FAQ from "./FAQ";
import "./faqs.css";
export default function FAQs() {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque
        facere ea impedit sint! Minus?
      </p>
      <div className="container faqs__container">
        {faqs.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
}
