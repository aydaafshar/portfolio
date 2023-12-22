import React from "react";
import contacts from "./data";
import "./contact.css";
export default function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
        tenetur.
      </p>
      <div className="container contact__container">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
