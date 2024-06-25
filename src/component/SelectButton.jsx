const SelectButton = ({ sectedbuttom }) => {
  const heandleOnclicked = (num) => {
    sectedbuttom(num);
  };
  let nums = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {nums.map((num, i) => (
        <button
          type="button"
          key={i}
          className={`btn btn-dark `}
          onClick={() => heandleOnclicked(num)}
        >
          {num}
        </button>
      ))}
    </>
  );
};
export default SelectButton;
