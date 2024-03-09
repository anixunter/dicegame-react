import styled from "styled-components";

const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const numberSelectHandler = (number) => {
    setSelectedNumber(number);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="boxes">
        {numbers.map((number, index) => {
          return (
            <Box
              key={index}
              $isSelected={number === selectedNumber} // using $ cuz of transient prop in styled component
              onClick={() => numberSelectHandler(number)}
            >
              {number}
            </Box>
          );
        })}
      </div>
      <p className="sub-title">Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .error {
    color: red;
    font-size: 20px;
    font-weight: 500px;
  }

  .boxes {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }

  .sub-title {
    font-size: 20px;
    font-weight: 500px;
  }
`;

const Box = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 500;
  background-color: ${(props) =>
    props.$isSelected
      ? "black"
      : "white"}; //this is how to use conditional css in styled componenets
  color: ${(props) => (!props.$isSelected ? "black" : "white")};
`;
