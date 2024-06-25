import { useState } from "react";
import GamePage from "./GamePage";

const Calculation = () => {
  const [userscore, setUserScore] = useState(1);

  const RamdonNum = Math.floor(Math.random() * 6) + 1;

  const [score, setscore] = useState(0);
  const onselcteButton = (number) => {
    setUserScore(number);
    if (userscore == RamdonNum) {
      setscore((pre) => pre);
    } else if (userscore < RamdonNum) {
      setscore((pre) => pre - 1);
    } else {
      setscore((pre) => pre + 1);
    }
  };
  const handleReset = () => {
    setscore(0);
  };

  return (
    <GamePage
      onselcteButton={onselcteButton}
      RamdonNum={RamdonNum}
      score={score}
      handleReset={handleReset}
    />
  );
};
export default Calculation;
