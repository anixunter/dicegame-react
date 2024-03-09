import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [gameOn, setGameOn] = useState(false); //setting this true for testing only. later change it to false

  const onClickHandler = () => {
    setGameOn((prev) => !prev); //you can do this like this as well -> setGameOn(!gameOn)
  };

  return (
    <>{gameOn ? <GamePlay /> : <StartGame onClickHandler={onClickHandler} />}</>
  );
}

export default App;
