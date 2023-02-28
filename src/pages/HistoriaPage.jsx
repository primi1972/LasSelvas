import { Fragment } from "react";
import { motion } from "framer-motion";

import Banner1 from "../assets/historia/bg.jpg";

export default function HistoriaPage() {
  return (
    <Fragment>
      <img src={Banner1} className="banner1" alt="" />
      <section className="d-flex justify-content-center align-items-start flex-wrap my-5  px-5 maxwidth mx-auto">
        <h1 className="text-success text-uppercase text-center">Historia</h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: [0, 20, 0], opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="d-flex flex-column justify-content-between minwidth py-5"
        >
          <h3 className="text-center">El nacimiento de Madererias las Selvas</h3>
          <p className="align-justify">
            Madereria las Selvas nacio Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Saepe minima sit a eum sint dolore perferendis
            provident alias, necessitatibus sequi rem eaque nisi voluptate odio,
            iusto iure? Officiis culpa quibusdam sapiente perferendis. Enim
            facilis modi totam quisquam. Aut optio quisquam obcaecati, delectus
            earum libero adipisci dolor culpa ab, voluptatem corporis
            perspiciatis sint illo iste? Dignissimos provident praesentium
            consectetur quisquam dolorum.
          </p>
        </motion.div>

        <motion.div           initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: [0, 20, 0], opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="d-flex flex-column justify-content-between minwidth py-5">
        <h3 className="text-center">Los primeros años de la empresa</h3>
        <p className="align-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem molestias, omnis est consectetur commodi eveniet
          tenetur repellendus unde facere quis doloremque, id fugit dignissimos
          voluptatum natus. Officiis, reprehenderit laborum. Provident
          temporibus aliquid ex reprehenderit, ipsa est iste odio non
          consectetur molestias sint iure minima harum id fugiat ullam quo.
          Saepe.
        </p>
        </motion.div>
        <motion.div           initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: [0, 20, 0], opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="d-flex flex-column justify-content-between minwidth py-5">
        <h3 className="text-center">El crecimiento desde el principio</h3>
        <p className="align-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ad
          maiores eaque vel pariatur saepe vero minus excepturi, ea modi
          asperiores earum dolorem tenetur molestiae quasi porro optio amet esse
          ex! Exercitationem facilis, ipsa eaque aliquid, pariatur recusandae
          corporis laboriosam molestiae mollitia natus hic similique eligendi
          odit. Dolore animi, necessitatibus dolores aperiam quam, magnam,
          obcaecati optio repellat accusamus reiciendis quidem.
        </p>
        </motion.div>

        <motion.div           initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: [0, 20, 0], opacity: 1 }}
          transition={{ delay: 0.2, duration: 2 }}
          className="d-flex flex-column justify-content-between minwidth py-5">
        <h3 className="text-center">Renovando la empresa y vision hacia el futuro</h3>
        <p className="align-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          asperiores a accusamus reprehenderit id sunt numquam, soluta officia
          saepe, nemo modi placeat labore est, dolores quos tempora atque
          quaerat? Porro eos neque in mollitia accusantium! Sunt perspiciatis
          deserunt impedit iusto itaque aliquid expedita aspernatur mollitia
          sapiente debitis consequuntur incidunt non quo eum ipsam id sequi,
          quos nemo, veritatis placeat. Accusantium, assumenda aperiam animi
          perferendis quisquam dignissimos soluta autem officia error.
        </p>
        </motion.div>
      </section>
    </Fragment>
  );
}
