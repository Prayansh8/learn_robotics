// src/App.js
import React, { useState } from "react";
// import Grid from './components/Grid';
// import LogicPanel from './components/LogicPanel';
// import Robot from './components/Robot';
import GridBoxes from "./components/Grid";

const App = () => {
  return (
    <div className="App">
      <h1>Grid of Boxes</h1>
      <GridBoxes />
    </div>
  );
};

export default App;
