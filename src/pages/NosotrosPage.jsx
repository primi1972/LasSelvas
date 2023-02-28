import { motion } from "framer-motion";
import Banner1 from "../assets/Nosotros/bg.jpg";

const Nosotros = () => {
  return (
    <div className="fondo_obscuro">
      <img src={Banner1} className="banner1" alt="" />
      <section className="d-flex justify-content-center maxwidth align-items-start flex-wrap py-5 mx-auto">
        <div className="titulo w-100">
          <motion.h1
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-success text-uppercase text-center"
          >
            Nosotros
          </motion.h1>
          <motion.h5
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-center fw-light my-3 text-white px-5"
          >
            Somos una empresa con mas de 100 años en el mercado, con un solo
            objetivo <b>Calidad</b>.
          </motion.h5>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mision-vision text-white d-flex w-90 my-5 gap-4 justify-content-center flex-wrap"
        >
          <div className="mision minwidth w-25 py-5">
            <h3 className="text-center pb-2">Misión</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              voluptatum nisi voluptas porro laborum voluptates? Quibusdam ea
              repellendus magni velit, a sunt, voluptatem facere consequatur
              beatae temporibus assumenda quidem mollitia cum iste doloribus
              dolore obcaecati sequi nulla perferendis, at blanditiis commodi
              cumque non qui. Accusantium, libero adipisci? Rem, possimus
              similique?
            </p>
          </div>
          <div className="vision minwidth w-25 py-5">
            <h3 className="text-center pb-2">Visión</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum obcaecati tenetur delectus libero quasi vitae in illo,
              mollitia reiciendis repellendus odio cumque, repellat nihil
              laborum eum architecto quidem porro? Dicta doloremque tempora illo
              eligendi, facilis cumque tenetur consequatur molestiae ducimus,
              laudantium perspiciatis animi debitis voluptatem praesentium ullam
              quisquam! Saepe, aperiam.
            </p>
          </div>
          <div className="valores minwidth w-45 py-5">
            <h3 className="text-center pb-2">Valores</h3>
            <div className="valores d-flex gap-3">
              <div>
                <p className="text-success">Compromiso</p>
                <div className="text-break">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas architecto ut provident optio aperiam tempora modi
                  accusantium, fugiat necessitatibus atque minus corporis libero
                  possimus a doloremque obcaecati
                </div>
              </div>
              <div>
                <p className="text-success">Servicio</p>
                <div className="text-break">
                  Voluptate! Ullam quam, nihil voluptas repudiandae magnam iusto
                  inventore veritatis laboriosam porro nesciunt optio delectus
                  beatae sint quibusdam consequuntur soluta ex eligendi commodi?
                </div>
              </div>
              <div>
                <p className="text-success">Calidad</p>
                <div className="text-break">
                  Voluptate! Ullam quam, nihil voluptas repudiandae magnam iusto
                  inventore veritatis laboriosam porro nesciunt optio delectus
                  beatae sint quibusdam consequuntur soluta ex eligendi commodi?
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Nosotros;
