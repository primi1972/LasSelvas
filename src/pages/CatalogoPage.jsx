import { Fragment, useState } from "react";
import * as XLSX from "xlsx";

import "../styles/catalogo.css";
import sierra from "../assets/catalogo/aserrMadera.jpg";
import clavo from "../assets/catalogo/clavarMadera.jpg";
import tornillo from "../assets/catalogo/atorrMadera.jpg";
import pegamento from "../assets/catalogo/pegarMadera.jpg";
import { useEffect } from "react";

const Catalogo = () => {
  const [madera, setMadera] = useState([]);
  const [selector, setSelector] = useState([]);

  useEffect(() => {
    sliderCatalogo();
  }, []);

  async function sliderCatalogo() {
    const res = await fetch("./catalogo.xlsx");
    const ab = await res.arrayBuffer(); // recover data as ArrayBuffer
    const wb = XLSX.read(ab);
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    const data = XLSX.utils.sheet_to_json(ws);
    //cargamos el catalogo en Jason
    setMadera(data);
  }

  const seleccionMadera = (e) => {
    e.preventDefault();
    setSelector(madera.filter((nombre) => nombre.MADERA === e.target.value));
  };

  return (
    <Fragment>
      <section className="pad-pag catalogoMaderas maxwidth mx-auto">
        <h1 className="text-center text-success">CATALOGO</h1>
        <div className="seleccionMadera mb-5 mx-auto" style={{width: "350px"}}>
          <div className="form-group">
            <label htmlFor="Select1" className="form-label mt-4">
              Caracteristicas Tecnicas.
            </label>
            <select
              className="form-select minwidth"
              id="Select1"
              name="Select1"
              value="Select1"
              onChange={seleccionMadera}
            >
              <option value={-1}>Madera </option>
              {madera.map((item) => (
                <option key={item.id}>{item.MADERA}</option>
              ))
              }
            </select>
          </div>
        </div>

        {selector.map((item) => (
          <div className="repintar mx-5" key={item.id}>
            <h3 className="text-center">{item.MADERA}</h3>
            <p className="text-center m-5">{item.DESC}</p>
            <div className="usoMadera mx-5 mb-5">
              <table className="table border shadow">
                <thead>
                  <tr className="bg-success text-white">
                    <th scope="col">USOS</th>
                    <th scope="col">DISPONIBILIDAD</th>
                    <th scope="col">PRECIO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.USO}</td>

                    <td>{item.DISP}</td>
                    <td>{item.PRECIO}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="trabMadera mb-5 text-center">
              <p>Propiedades Relativas para la Elaboración.</p>
              <table className="table border shadow">
                <thead>
                  <tr className="bg-success text-white">
                    <th scope="col">Trabajo Mecanico</th>
                    <th scope="col">Resistencia al Clavarla.</th>
                    <th scope="col">Resistencia al Atornillar</th>
                    <th scope="col">Aptitud para el Colado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src={sierra} alt="" />
                    </td>
                    <td>
                      <img src={clavo} alt="" />
                    </td>
                    <td>
                      <img src={tornillo} alt="" />
                    </td>
                    <td>
                      <img src={pegamento} alt="" />
                    </td>
                  </tr>
                  <tr>
                    <td>{item.EM}</td>
                    <td>{item.RR}</td>
                    <td>{item.RT}</td>
                    <td>{item.AP}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="propMadera mb-5 text-center">
              <p>Propiedades Fisicas.</p>
              <table className="table border shadow">
                <thead>
                  <tr className="bg-success text-white">
                    <th scope="col">Peso especifico (12%h)</th>
                    <th scope="col">
                      Peso Promedio de embbarque kg/m3 sec. al aire.
                    </th>
                    <th scope="col">
                      Cocentración volumétrica promedio (sec. en estufa % de
                      verde)
                    </th>
                    <th scope="col">Carga unitaria de rotura (kPa)</th>
                    <th scope="col">Módulo de elasticidad (MPa)</th>
                    <th scope="col">Dureza transversal (Newtons)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> {item.PE} </td>
                    <td> {item.PPE} </td>
                    <td> {item.CVP} </td>
                    <td> {item.CUR} </td>
                    <td> {item.ME} </td>
                    <td> {item.DT} </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
};

export default Catalogo;
