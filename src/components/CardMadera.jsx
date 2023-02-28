import React from "react";
import "../styles/MaderasPage.css";
import { Fragment } from "react";

const Madera = ({imagen, titulo}) => {
  return (
    <Fragment>
      <div className="tarjeta m-3 border-primary text-black shadow">
        <div className="bandera text-white d-flex fw-semibold">
          <div className="bandera_inicio d-flex align-items-center justify-content-center ps-4">
            Información
          </div>
          <div className="bandera_punta"></div>
        </div>        
        <img src={imagen} className="" alt="..." />
        <p className="text-center titulo py-2 fs-3">{titulo}</p>
      </div>
    </Fragment>
  );
};

export default Madera;
