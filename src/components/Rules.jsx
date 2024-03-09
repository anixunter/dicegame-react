import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice</p>
        <p>
          If selected number is equal to dice number you will get same point as
          dice
        </p>
        <p>If you guess wrong then 1 point will be dedcuted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  h2 {
    font-size: 20px;
    text-align: center;
  }
  .text {
    margin-top: 10px;
    padding-left: 66px;
  }
`;
