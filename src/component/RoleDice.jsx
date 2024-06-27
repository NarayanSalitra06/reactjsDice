import { useContext } from "react";
import { AllClaculatin } from "../store/Calculation";

const RoleDice = () => {
  const { RamdonNum } = useContext(AllClaculatin);
  return <img src={`/image/dice-${RamdonNum}.png`} alt="doce image" />;
};
export default RoleDice;
