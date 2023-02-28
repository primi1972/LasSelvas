import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "../styles/MaderasPage.css";
import Banner1 from "../assets/maderas/bg.jpg";
import CardMadera from "../components/CardMadera";
import Mad1 from "../assets/maderas/mad1-01.jpg";
import Mad2 from "../assets/maderas/mad2-01.jpg";
import Mad3 from "../assets/maderas/mad3-01.jpg";
import Mad4 from "../assets/maderas/mad4-01.jpg";

const Maderas = () => {
  return (
    <Fragment>
      <img src={Banner1} className="banner1" alt="" />
      <section className="d-flex justify-content-center align-items-start flex-wrap my-5 maxwidth mx-auto">
        <div className="titulo w-100">
          <h1 className="text-success text-uppercase text-center">Maderas</h1>
          <h5 className="text-center fw-light my-3">
            Manejamos las maderas desde su origen producidas desde nuestros
            acerraderos con lo cual garantizamos el producto que vendemos.
          </h5>
        </div>

        <div className="d-flex flex-wrap justify-content-center">
          <NavLink to="/maderasDetalle/1">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <CardMadera imagen={Mad1} titulo="Alamo Blanco" />
            </motion.div>
          </NavLink>
          <NavLink to="/maderasDetalle/2">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <CardMadera imagen={Mad2} titulo="Alamo" />
            </motion.div>
          </NavLink>
          <NavLink to="/maderasDetalle/3">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <CardMadera imagen={Mad3} titulo="Olmo" />
            </motion.div>
          </NavLink>
          <NavLink to="/maderasDetalle/4">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
            >
              <CardMadera imagen={Mad4} titulo="Pino Blanco" />
            </motion.div>
          </NavLink>
        </div>
      </section>
    </Fragment>
  );
};

export default Maderas;
