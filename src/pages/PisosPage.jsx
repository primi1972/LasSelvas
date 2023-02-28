import { Fragment } from "react";
import Banner1 from "../assets/Pisos/bg.jpg";

const Pisos = () => {
  return (
    <Fragment>
      <img src={Banner1} className="banner1" alt="" />
      <section className="d-flex justify-content-center maxwidth align-items-start flex-wrap my-5 mx-auto">
        <div className="titulo w-100">
          <h1 className="text-success text-uppercase text-center">Pisos</h1>
          <h5 className="text-center fw-light my-3">
            Somos una empresa con mas de 100 años en el mercado, con un solo
            objetivo <b>Calidad</b>.
          </h5>
        </div>
      </section>
    </Fragment>
  );
};

export default Pisos;
