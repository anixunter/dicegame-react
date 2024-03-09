import styled from "styled-components";

const RollDice = ({ currentDice, diceRollHandler, showHit }) => {
  return (
    <RollDiceContainer
      $showHit={showHit === "Hit!!!"} //this is how to pass props in styled components
    >
      <p className="show-hit">{showHit}</p>
      <div className="dice" onClick={diceRollHandler}>
        <img src={`/dicegame-react/images/dice/dice_${currentDice}.png`} />
      </div>
      <p className="sub-title">Click on Dice to Roll</p>
    </RollDiceContainer>
  );
};

export default RollDice;

const RollDiceContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .show-hit {
    color: ${(props) =>
      props.$showHit
        ? "black"
        : "red"}; //styled components ccs conditionaling way
    font-size: 24px;
    font-weight: 500px;
  }

  .dice {
    cursor: pointer;
  }

  .sub-title {
    font-size: 24px;
  }
`;
