import { motion } from "framer-motion";
import Banner1 from "../assets/Servicios/bg.jpg";
import CardGeneral from "../components/Cards";

const Servicios = () => {
  return (
    <div className="fondo_obscuro">
      <img src={Banner1} className="banner1" alt="" />
      <section className="d-flex justify-content-center maxwidth align-items-start flex-wrap py-5 mx-auto">
        <div className="titulo w-100">
          <motion.h1
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-success text-uppercase text-center"
          >
            Servicios
          </motion.h1>
          <motion.h5
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-center fw-light my-3 text-white px-5"
          >
            Fletes, maquilado, estufado, instalacion y todo lo que necesite lo encuentras con nosotros.
          </motion.h5>
        </div>
        <div className="text-white d-flex w-90 my-5 gap-4 justify-content-center flex-wrap">
          <CardGeneral
            imagen="fa-solid fa-truck-fast"
            titulo="Flete"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint adipisci, dolore voluptates minus natus iusto voluptas velsaepe error rerum ex ad, eaque necessitatibus neque numquam eiusaccusamus rem. In suscipit earum placeat quibusdam teneturvoluptates ea ab cum eius odio est fugiat perspiciatis liberoculpa, saepe deserunt consequuntur."
          ></CardGeneral>
          <CardGeneral
            imagen="fa-solid fa-temperature-high"
            titulo="Material Estufado"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint adipisci, dolore voluptates minus natus iusto voluptas velsaepe error rerum ex ad, eaque necessitatibus neque numquam eiusaccusamus rem. In suscipit earum placeat quibusdam teneturvoluptates ea ab cum eius odio est fugiat perspiciatis liberoculpa, saepe deserunt consequuntur."
          ></CardGeneral>
          <CardGeneral
            imagen="fa-solid fa-store"
            titulo="Abasto seguro y continuo"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero sint adipisci, dolore voluptates minus natus iusto voluptas velsaepe error rerum ex ad, eaque necessitatibus neque numquam eiusaccusamus rem. In suscipit earum placeat quibusdam teneturvoluptates ea ab cum eius odio est fugiat perspiciatis liberoculpa, saepe deserunt consequuntur."
          ></CardGeneral>
          <CardGeneral
            imagen="fa-solid fa-clipboard"
            titulo="Calidad al Cliente"
            texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberosint adipisci, dolore voluptates minus natus iusto voluptas velsaepe error rerum ex ad, eaque necessitatibus neque numquam eiusaccusamus rem. In suscipit earum placeat quibusdam teneturvoluptates ea ab cum eius odio est fugiat perspiciatis liberoculpa, saepe deserunt consequuntur."
          ></CardGeneral>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
