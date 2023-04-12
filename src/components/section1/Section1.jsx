import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <section>
      <div className="section1">
        <img
          className="section1__logo"
          src={"https://activa.org.mx/wp-content/uploads/2023/03/Logo.png"}
          alt="Logo"
        />

        <div className="section1__description">
          MUCHOS SUEÑAN CON <b>TENER ÉXITO</b>, OTROS LUCHAN
          <b> POR CONSEGUIRLO</b>.
        </div>

        <div className="section1__description dos">
          <span>Te invita a participar en la </span>
          <b>primera convocatoria</b>{" "}
          <span>para premiar e impulsar el talento de la comunidad.</span>
        </div>
      </div>
      <div className="section1__title">
        <h2 className="section1__title__title">IMPULSANDO</h2>
        <p className="section1__title__desc">
          <h3>EL ÉXITO</h3>
          <div>
            El proyecto<span> más creativo y con mayor potencial </span>de cada
            categoría será acreedor a un<span> premio monetario </span>que lo
            impulse y pueda lograr su sueño.
          </div>
        </p>
      </div>
    </section>
  );
};

export default Section1;
