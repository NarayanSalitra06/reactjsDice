const ScoreButton = ({ score }) => {
  return (
    <button type="button" className={`btn btn-dark`}>
      {score}
    </button>
  );
};

export default ScoreButton;
