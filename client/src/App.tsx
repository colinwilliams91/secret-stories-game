import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";

import { click, thock } from "./utils/sounds";

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => click.play()}>POWER-UP!</button>
        <input onChange={() => thock.play()}></input>
      </header>
    </div>
  );
};

export default App;
