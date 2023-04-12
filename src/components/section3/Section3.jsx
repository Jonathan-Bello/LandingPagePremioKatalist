import React from "react";
import CardsSection3 from "./CardsSection3";
import "./Section3.css";

const Section3 = () => {
  return (
    <section className="section3">
      <div>
        <h2 className="section3__title">Comité de evaluación</h2>
        <p className="section3__description">
          EL EQUIPO EVALUADOR SE CONFORMA POR <b>RENOMBRADOS EXPERTOS </b>EN
          EMPRENDIMIENTO Y NEGOCIOS.
        </p>
      </div>

      <div
        id="Calendario"
        className="s-pt-4 s-px-2"
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
        }}
      >
        <h2 className="section__table__title">CALENDARIO DE ACTIVIDADES</h2>
        <table className="section__table">
          <thead>
            <tr>
              <th>ANUNCIO DE LA CONVOCATORIA</th>
              <th>FECHA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Se abre convocatoria</td>
              <td>17 de abril</td>
            </tr>

            <tr>
              <td>Se cierra la convocatoria</td>
              <td>14 de mayo</td>
            </tr>

            <tr>
              <td>Pitch de los semifinalistas ante jurado experto</td>
              <td>21 de junio</td>
            </tr>

            <tr>
              <td>Gala de premiacion “Salomon y Janet Cohen</td>
              <td>29 de agosto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Section3;
