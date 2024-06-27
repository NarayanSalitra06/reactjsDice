import { useState } from "react";
import "./App.css";

import Start from "./component/Start";

import GamePage from "./component/GamePage";
import Calculation, { AllClaculatin } from "./store/Calculation";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const state = () => {
    setIsGameStarted((pre) => !pre);
  };
  return (
    <>
      <Calculation>
        {isGameStarted ? <GamePage /> : <Start state={state}></Start>}
      </Calculation>
    </>
  );
}

export default App;
