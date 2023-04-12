import React from "react";
import "./Section4.css";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="s-main-center s-cross-center">
        <p className="section4__slogan">
          Activa katalyst te invita a este proyecto intercomunitario
        </p>
      </div>

      <img
        src={"https://activa.org.mx/wp-content/uploads/2023/03/marcas.png"}
        alt="marcas"
        className="section4__marcas"
      />

      <div className="footer__links">
        <a href="#terminos">TÉRMINOS Y CONDICIONES</a>
        <a href="#aviso">AVISO DE PRIVACIDAD</a>
      </div>
    </section>
  );
};

export default Section4;
