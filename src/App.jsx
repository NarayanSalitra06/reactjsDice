import { useState } from "react";
import "./App.css";

import Start from "./component/Start";
import Calculation from "./component/Calculation";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const state = () => {
    setIsGameStarted((pre) => !pre);
  };
  return <>{isGameStarted ? <Calculation /> : <Start state={state}></Start>}</>;
}

export default App;
