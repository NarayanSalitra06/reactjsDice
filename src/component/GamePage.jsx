import css from "./GamePage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RoleDice from "./RoleDice";
import SelectButton from "./SelectButton";
import ScoreButton from "./ScoreButton";
import { useState } from "react";
import GameRule from "./GameRule";

const GamePage = ({ onselcteButton, score, handleReset, RamdonNum }) => {
  const [showRule, setShowRule] = useState(false);
  const handleShorRule = () => {
    setShowRule((pre) => !pre);
  };

  return (
    <>
      <div className={css.maincontainer}>
        <div>
          <div className={css.headcontainer}>
            <div>
              <ScoreButton score={score}></ScoreButton>
            </div>
            <div>
              <div className="buttenContainer">
                <SelectButton sectedbuttom={onselcteButton}></SelectButton>
              </div>
            </div>
          </div>
          <center className={css.rotatingDice}>
            <RoleDice RamdonNum={RamdonNum}></RoleDice>
          </center>
          <center className={css.buttongamepage}>
            <div className={css.buttomplaygameandrule}>
              <button
                type="button"
                className={`btn btn-dark`}
                style={{ width: "200px" }}
                onClick={handleReset}
              >
                RESET SCORE
              </button>
            </div>
            <div className={css.buttomplaygameandrule}>
              <button
                type="button"
                className={`btn btn-light `}
                style={{ width: "200px" }}
                onClick={handleShorRule}
              >
                GAME RULE
              </button>
            </div>
            <div className={css.GameRule}></div>
            {showRule && <GameRule></GameRule>}
          </center>
        </div>
      </div>
    </>
  );
};

export default GamePage;
