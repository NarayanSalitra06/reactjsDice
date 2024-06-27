import { useContext } from "react";
import { AllClaculatin } from "../store/Calculation";

const ScoreButton = () => {
  const { score } = useContext(AllClaculatin);
  return (
    <button type="button" className={`btn btn-dark`}>
      {score}
    </button>
  );
};

export default ScoreButton;
