import React, { Fragment } from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
import "./model.css";
import { useModalContext } from "../context/moda-context";
export default function Model({ className, children }) {
  const { showModal, closeModelHandler } = useModalContext();
  return (
    <Fragment>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModelHandler}></section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector("#overlays")
        )}
    </Fragment>
  );
}
