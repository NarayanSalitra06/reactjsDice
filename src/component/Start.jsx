import css from "./Start.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Start = ({ state }) => {
  return (
    <>
      <center className={css.centercontainer}>
        <img src="/image/dicesFront.png"></img>
        <div className={css.h1container}>
          <h1 className={css.h1}>Dice Game</h1>
          <button
            type="button"
            class="btn btn-dark"
            style={{ width: "200px" }}
            onClick={state}
          >
            PLAY GAME
          </button>
        </div>
      </center>
    </>
  );
};
export default Start;
