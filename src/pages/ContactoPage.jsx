import { Fragment } from "react";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <Fragment>
      <section className="pad-pag maxwidth mx-auto mb-5">
        <h1 className="text-success text-uppercase text-center mb-5">
          Contacto
        </h1>
        <div className="d-flex mx-2 gap-4 justify-content-center flex-wrap">
          <iframe
            className="minwidth w-45 shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5291650469294!2d-99.1243274847551!3d19.43273908688422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1feb53f8a95e3%3A0x138fa40c24e08650!2sMadereria%20Las%20Selvas%2C%20SA%20de%20CV!5e0!3m2!1ses-419!2smx!4v1667706131697!5m2!1ses-419!2smx"
            height="550px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{duration: 2 }}
            className="minwidth w-45"
          >
            <form id="form_contacto " mehotd="post" action="enviar.php">
              <div className="field_container d-flex align-items-center border border-1 border-primary bg-primary text-white form-floating mb-4">
                <i className="fa-solid fa-envelope mx-2"></i>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="floatingInput"
                  required
                />
                <label for="floatingInput" className="text-primary ms-4">
                  Correo
                </label>
              </div>
              <div className="field_container d-flex align-items-center border border-1 border-primary bg-primary text-white form-floating mb-4">
                <i className="fa-solid fa-user mx-2"></i>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  placeholder="Enter nombre"
                  id="floatingInput"
                  required
                />
                <label for="floatingInput" className="text-primary ms-4">
                  Nombre
                </label>
              </div>
              <div className="field_container d-flex align-items-center border border-1 border-primary bg-primary text-white form-floating mb-4">
                <i className="fa-solid fa-map-location-dot mx-2"></i>
                <input
                  type="text"
                  name="apellidos"
                  className="form-control"
                  placeholder="Enter direccion"
                  id="floatingInput"
                />
                <label for="floatingInput" className="text-primary ms-4">
                  Dirección
                </label>
              </div>
              <div className="field_container d-flex align-items-center border border-1 border-primary bg-primary text-white form-floating mb-4">
                <i className="fa-solid fa-phone mx-2"></i>
                <input
                  type="tel"
                  name="tel"
                  className="form-control"
                  placeholder="Enter telefono"
                  id="floatingInput"
                />
                <label for="floatingInput" className="text-primary ms-4">
                  Telefono
                </label>
              </div>
              <div className="field_container d-flex align-items-center border border-1 border-primary bg-primary text-white form-floating mb-4">
                <i className="fa-solid fa-comment mx-2"></i>
                <textarea
                  type="text"
                  name="comentarios"
                  rows="3"
                  className="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput" className="text-primary ms-4">
                  Comentarios
                </label>
              </div>
              <div>
                <button type="submit" className="btn btn-success fs-5 mt-3">
                  Enviar
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </Fragment>
  );
};

export default Contacto;
