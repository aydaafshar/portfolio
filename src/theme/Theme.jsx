import React from "react";
import Model from "../components/Model";
import { primaryColors, backgroundColorss } from "./data";
import PrimaryColor from "./PrimaryColor";
import BackgroundColor from "./BackgroundColor";
import "./theme.css";
export default function Theme() {
  return (
    <Model className="theme__modal">
      <h3>Customize your theme</h3>
      <small>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, sit.
      </small>
      <div className="theme__primary-wrapper">
        <h5>Primary Colors</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} />
          ))}
        </div>
      </div>
      <div className="theme__background-wrapper">
        <h5>Background Colors</h5>
        <div className="theme__background-colors">
          {backgroundColorss.map((bColor) => (
            <BackgroundColor
              key={bColor.className}
              className={bColor.className}
            />
          ))}
        </div>
      </div>
    </Model>
  );
}
