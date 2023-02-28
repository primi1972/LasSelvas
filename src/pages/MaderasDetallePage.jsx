import React from "react";
import { useParams } from "react-router-dom";

import SliderMaderas from "../components/SliderMaderas";
import Imagen1_1 from "../assets/maderas/mad1-01.jpg";
import Imagen1_2 from "../assets/maderas/mad1-02.jpg";
import Imagen1_3 from "../assets/maderas/mad1-03.jpg";
import Imagen2_1 from "../assets/maderas/mad1-03.jpg";
import Imagen2_2 from "../assets/maderas/mad1-03.jpg";
import Imagen2_3 from "../assets/maderas/mad1-03.jpg";
import Imagen3_1 from "../assets/maderas/mad3-01.jpg";
import Imagen3_2 from "../assets/maderas/mad3-02.jpg";
import Imagen3_3 from "../assets/maderas/mad3-03.jpg";
import Imagen4_1 from "../assets/maderas/mad4-01.jpg";
import Imagen4_2 from "../assets/maderas/mad4-02.jpg";
import Imagen4_3 from "../assets/maderas/mad4-03.jpg";

export default function MaderasDetallePage() {

  let Imagenes = [];
  const {id} = useParams();

  switch(id)
  {
  case '1':
    Imagenes = [Imagen1_1, Imagen1_2, Imagen1_3];
    var Nombre = "Alamo Blanco";   
  break;
  case '2':
    Imagenes = [Imagen2_1, Imagen2_2, Imagen2_3];
    var Nombre = "Alamo"; 
  break;
  case '3':
    Imagenes = [Imagen3_1, Imagen3_2, Imagen3_3];
    var Nombre = "Olmo"; 
  break;
  case '4':
    Imagenes = [Imagen4_1, Imagen4_2, Imagen4_3];
    var Nombre = "Pino Blanco"; 
  break;    
  default:
  //default statement or expression;
  }

  return (
    <section className="pad-pag">
      <div className="d-flex justify-content-center align-items-center flex-wrap maxwidth mx-auto gap-5 my-5">
        <SliderMaderas nombre={Nombre} imagenes={Imagenes} />
      </div>
    </section>
  );
}
