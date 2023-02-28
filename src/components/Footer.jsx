import { Fragment } from "react";
import '../styles/footer.css'


const Footer = () => {
  return (
    <Fragment>
      <footer className="fondo_obscuro minwidth text-white d-flex justify-content-around text-center posicion flex-wrap pb-4">
        <section className="copyright minwidth w-22">
          <h3 className="mt-5 mb-4 text-success">Copyright</h3>
          <p>Si requieres la información sobre nuestro <a href="#" className="text-decoration-none text-danger">aviso de privacidad</a> te dejamos el acceso.</p>
        </section>
        <section className="direccion minwidth w-22">
          <h3 className="mt-5 mb-4 text-success">Dirección</h3>
          <p>
            <i className="fas fa-map-marker-alt me-2"></i>Emiliano Zapata No. 124
          </p>
          <p>Col. Centro</p>
          <p>México CDMX, C.P. 56600</p>
        </section>        
        <section className="contacto minwidth w-22">
          <h3 className="mt-5 mb-4 text-success">Contacto</h3>
          <p>
            <i className="fas fa-phone-alt me-2"></i>Tel: 55 5522-2322
          </p>
          <p><i className="fas fa-phone-alt me-2"></i>Fax: 55 5522-5403</p>
          <p>
            <i className="fas fa-envelope me-2"></i>info@las-selvas.com
          </p>
          <p><i className="fas fa-envelope me-2"></i>ventas@las-selvas.com</p>
        </section>
        <section className="horarios minwidth w-22">
          <h3 className="mt-5 mb-4 text-success">Horarios</h3>
          <p>Lunes a Viernes:</p>
          <p>8:30 a 17:30</p>
          <p>Sabado:</p>
          <p>8:30 a 13:00</p>
        </section>
      </footer>
    </Fragment>
  );
};

export default Footer;
