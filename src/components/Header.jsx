import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import "../styles/header.css";
import Logo from "../assets/header/logo.png";

var scrollPos = 0;
window.addEventListener("scroll", function () {
  var menu = document.querySelector(".menuOcultar");
  var menu1 = document.querySelector(".menuOcultar1");
  var flechaArriba = document.querySelector(".flechaArriba");

  if (window.pageYOffset > scrollPos) {
    menu.classList.add("ocultar");
    menu.classList.remove("mostrar");
    menu1.classList.add("ocultar");
    menu1.classList.remove("mostrar");
    flechaArriba.classList.remove("ocultarFlecha");
  } else {
    menu.classList.remove("ocultar");
    menu.classList.add("mostrar");
    menu1.classList.remove("ocultar");
    menu1.classList.add("mostrar");
    flechaArriba.classList.add("ocultarFlecha");
  }
  scrollPos = window.pageYOffset;
});

const Header = () => {

  var [Valor, setValor] = useState(0);

  


  return (
    <Fragment>
      <header className="position-fixed w-100 zindex-10">
        <nav className="menuOcultar navbar navbar-expand-lg bg-white d-flex minwidth px-5 py-1 shadow mostrar">
          <img src={Logo} alt="" className="navbar-brand logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex-lg justify-content-end order-lg-2"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link fs-5 d-flex flex-column" to="/">
                  Inicio
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 d-flex flex-column"
                  to="/nosotros"
                >
                  Nosotros
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle fs-5"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink
                      className="dropdown-item text-decoration-none"
                      to="/maderas"
                    >
                      Maderas
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-decoration-none"
                      to="/pisos"
                    >
                      Pisos
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item text-decoration-none"
                      to="/tarimas"
                    >
                      Tarimas
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown"></li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 d-flex flex-column"
                  to="/servicios"
                >
                  Servicios
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 d-flex flex-column"
                  to="/catalogo"
                >
                  Catalogo
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 d-flex flex-column"
                  to="/contacto"
                >
                  Contacto
                  <span className="lineamenu border-top border-success border-3"></span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <nav>
          <form
            action=""
            className="menuOcultar1 form d-flex ms-3 p-2 bg-success shadow"
            style={{ width: "300px" }}
          >
            <input type="number" name="number" className="form-control ms-2" onChange={(e) => {
             
              setValor(e.target.value);
              console.log(Valor);
            }}/>
            <div
              onClick={() => {
                function Metros(numero) {
                  if (numero != null) {
                    //SI ES DIFERENTE DE NULL
                    return((3.28084 * parseFloat(numero)).toFixed(2)) ;
                  }
                }
                toast.success(`${Valor} pies = ${Metros(Valor)} mts`, {
                  className: "bg-primary fs-3 text-white shadow",
                });
              }}
              className="btn btn-success mx-1"
            >
              mts
            </div>
            <div
              onClick={() => {
                function Metros(numero) {
                  if (numero != null) {
                    //SI ES DIFERENTE DE NULL
                    return((0.3048 * parseFloat(numero)).toFixed(2)) ;
                  }
                }
                toast.success(`${Valor} mts = ${Metros(Valor)} pies`, {
                  className: "bg-primary fs-3 text-white shadow",
                });
              }}
              className="btn btn-success"
            >
              pies
            </div>
            <div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              ></button>
            </div>
          </form>
          <div>
            <Toaster position="top-center" />
          </div>
        </nav>
      </header>

      <div>
        <a
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="ocultarFlecha fa-solid fa-chevron-up fa-2xl flechaArriba position-fixed shadow rounded-circle d-flex justify-content-center align-items-center bg-primary text-white text-decoration-none"
        ></a>
        <a className="fa-brands fa-whatsapp fa-2xl iconWhatsapp position-fixed shadow rounded-circle d-flex justify-content-center align-items-center text-decoration-none"></a>
      </div>
    </Fragment>
  );
};

export default Header;
