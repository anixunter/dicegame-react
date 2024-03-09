import styled from "styled-components";
import { Button } from "./styled/Button";

const StartGame = ({ onClickHandler }) => {
  return (
    <Container>
      <div>
        <img src="/dicegame-react/images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={onClickHandler}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;

  .content {
    h1 {
      font-size: 60px;
      white-space: nowrap;
    }
  }
`;
