import { createContext, useState } from "react";

export const AllClaculatin = createContext([]);

const Calculation = ({ children }) => {
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
    <AllClaculatin.Provider
      value={{
        onselcteButton,
        RamdonNum,
        score,
        handleReset,
      }}
    >
      {children}
    </AllClaculatin.Provider>
  );
};
export default Calculation;
