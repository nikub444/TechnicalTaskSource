import React from "react";
import "./App.css";
import Chart from "./components/Chart/Chart";
import DestructButton from "./components/DestructButton/destructButton";
import Donut from "./components/Donut/Donut";
import Snake from "./components/Snake/Snake";
import Man from "./components/walking/Man";

function App() {
  return (
    <div>
      <Snake />
      <Man />
      <div className="container">
        <Donut />
        <Chart />
      </div>

      <DestructButton />
    </div>
  );
}

export default App;
