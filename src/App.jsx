import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/nav/Nav";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import CardsSection3 from "./components/section3/CardsSection3";
import Section4 from "./components/section4/Section4";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Section1 />
      <Section2 />
      <Section3 />
      <CardsSection3 />
      <Section4 />
    </div>
  );
}

export default App;
