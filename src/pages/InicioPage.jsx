import { Fragment } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "../styles/inicio.css";

const Inicio = () => {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fondo d-flex align-items-center justify-content-center text-white"
      >
        <div className="text-center">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="titulo"
          >
            Maderería Las Selvas SA de CV
          </motion.h1>
          <motion.h3
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="parrafo fw-lighter px-3"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Quas autem sunt impedit unde deleniti ab maxime eius <br />
            quia labore corporis!
          </motion.h3>

          <NavLink to="/historia">
            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="btn btn-success fs-5 mx-auto botonHistoria"
            >
              Historia...
            </motion.button>
          </NavLink>
        </div>
      </motion.div>
      <motion.a
        href="#info"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="contenedorFlecha rounded-top"
        type="button"
      >
        <i className="fa-solid fa-chevron-down fa-xl flecha"></i>
      </motion.a>

      <div className="d-flex flex-column align-items-center" id="info">
        <div className="info_mercado fondo_obscuro text-center py-5 w-100">
          <h2 className="text-success text-uppercase w-50 mx-auto">
            mayoreo y menudeo de madera con la mas alta calidad para el mercado
            nacional.
          </h2>
          <h4 className="text-white fw-light">
            Los productos que manejamos provienen de nuestros aserraderos.
          </h4>
        </div>
        <div className="info d-flex justify-content-around maxwidth align-items-end flex-wrap gap-2">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: [0, 20, 0], opacity: 1 }}
            transition={{ delay: 0.4, duration: 2 }}
            className="d-flex flex-column justify-content-between w-30 minwidth py-5"
          >
            <i className="fa-regular fa-user fa-2xl my-5 text-center"></i>
            <h3 className="text-center">Nosotros</h3>
            <p className="text-center">
              Somos una empresa con mas de 100 años en el mercado, con un solo
              objetivo <b>Calidad</b>.
            </p>
            <NavLink to="/nosotros" className="btn btn-success fs-5 mx-auto">
              Leer Mas...
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: [0, 20, 0], opacity: 1 }}
            transition={{ duration: 2 }}
            className="d-flex flex-column justify-content-between w-30 minwidth py-5"
          >
            <i className="fa-regular fa-handshake fa-2xl my-5 text-center"></i>
            <h3 className="text-center">Servicios</h3>
            <p className="text-center">
              Fletes, maquilado, estufado, instalación y todo lo que necesites
              lo encuentras con nosotros.
            </p>
            <NavLink to="/servicios" className="btn btn-success fs-5 mx-auto">
              Leer Mas...
            </NavLink>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: [0, 20, 0], opacity: 1 }}
            transition={{ delay: 0.2, duration: 2 }}
            className="d-flex flex-column justify-content-between w-30 minwidth py-5"
          >
            <i className="fa-regular fa-address-card fa-2xl my-5 text-center"></i>
            <h3 className="text-center">Contáctanos</h3>
            <p className="text-center">
              Estamos para apoyarte ponte en contacto y con gusto te
              atenderemos.
            </p>
            <NavLink to="/contacto" className="btn btn-success fs-5 mx-auto">
              Leer Mas...
            </NavLink>
          </motion.div>
        </div>
      </div>
    </Fragment>
  );
};

export default Inicio;
