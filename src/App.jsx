import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import CardsSection3 from "./components/section3/CardsSection3";
import Section4 from "./components/section4/Section4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="logoActiva__content">
        <img
          className="logoActiva"
          src="https://activa.org.mx/wp-content/uploads/2023/04/LogoActiva1.png"
          alt="Logo"
        />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
      <CardsSection3 />
      <Section4 />
    </div>
  );
}

export default App;
