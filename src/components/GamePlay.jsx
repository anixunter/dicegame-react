import styled from "styled-components";
import { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { Button, OutlineButton } from "./styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [showHit, setShowHit] = useState("");

  const diceRollHandler = () => {
    const randomDiceNumber = Math.floor(Math.random() * (7 - 1) + 1);

    if (!selectedNumber) {
      setError("Please select any number");
      setShowHit("");
      return;
    }

    setCurrentDice(randomDiceNumber);

    if (selectedNumber === randomDiceNumber) {
      setShowHit("Hit!!!");
      setScore((prev) => prev + randomDiceNumber);
    } else {
      setShowHit("Miss!!!");
      setScore((prev) => prev - 1);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setShowHit("");
    setError("");
    setSelectedNumber(undefined);
  };

  return (
    <GamePlayContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RollDice
        currentDice={currentDice}
        diceRollHandler={diceRollHandler}
        showHit={showHit}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Game</OutlineButton>
        <Button onClick={() => setShowRules(!showRules)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </GamePlayContainer>
  );
};

export default GamePlay;

const GamePlayContainer = styled.div`
  padding-top: 10px;
  .top-section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 20px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
