import Game from "../componentes/game/Game";
import SelectPlayer from "../componentes/selectPlayer/SelectPlayer";
import { useState } from "react";

const Play = () => {
  const [statusGame, setStatusGame] = useState<number>(1);

  return (
    <>
      {statusGame === 1 && (
        <SelectPlayer
          image="select1.png"
          setStatusGame={setStatusGame}
          statusGame={statusGame}
        />
      )}
      {statusGame === 2 && (
        <SelectPlayer
          image="select2.png"
          setStatusGame={setStatusGame}
          statusGame={statusGame}
        />
      )}
      {statusGame === 3 && <Game />}
    </>
  );
};

export default Play;
