import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Stack, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Layout from "../../layout/Layout";
import FightCard from "../fight/FightCard";
import { State } from "../../store/store.types";
import { useDamageCaused } from "../../data/pokemon/hooks";

const Game = () => {
  const navigate = useNavigate();
  const pokemonsData = useSelector((state: State) => state.pokemon);
  const player1isAttackerStorage: string | null =
    localStorage.getItem("player1isAttacker");

  const [player1isAttacker, setPlayer1isAttacker] = useState<boolean>(
    player1isAttackerStorage ? player1isAttackerStorage === "true" : true
  );
  const [moveOne, setMoveOne] = useState<string>(
    pokemonsData.player1.moves[0].name
  );
  const [moveTwo, setMoveTwo] = useState<string>(
    pokemonsData.player2.moves[0].name
  );
  const { getDamageCaused, damage } = useDamageCaused(player1isAttacker);

  const onLaunchAttack = () => {
    setPlayer1isAttacker((prevValue) => !prevValue);
    getDamageCaused({
      attackerPokemon: player1isAttacker
        ? pokemonsData.player1
        : pokemonsData.player2,
      moveType: player1isAttacker ? moveOne : moveTwo,
      defenderPokemon: player1isAttacker
        ? pokemonsData.player2
        : pokemonsData.player1,
    });
  };

  useEffect(() => {
    if (pokemonsData.player1.currentHP <= 0) {
      navigate("/win?pokemonWin=player2");
    }
    if (pokemonsData.player2.currentHP <= 0) {
      navigate("/win?pokemonWin=player1");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokemonsData]);

  const onSaveGame = () => {
    localStorage.setItem("player1", JSON.stringify(pokemonsData.player1));
    localStorage.setItem("player2", JSON.stringify(pokemonsData.player2));
    localStorage.setItem("player1isAttacker", player1isAttacker.toString());
  };

  return (
    <Layout>
      <Button
        variant="text"
        color="error"
        sx={{ position: "absolute", top: 16, right: 16 }}
        onClick={onSaveGame}
      >
        Guardar partida
      </Button>
      <Stack height="100%" width="100%" gap={2} alignItems="center">
        <Stack direction="row" justifyContent={"space-around"} width="80%">
          <Paper sx={{ background: "transparent", mb: 2 }} elevation={0} square>
            <img
              src={`/${pokemonsData.player1.name}.png`}
              alt="Fight"
              width={270}
              height={80}
            />
          </Paper>
          <Stack width="220px" alignItems="center">
            <Paper
              sx={{ background: "transparent", mb: 2 }}
              elevation={0}
              square
            >
              <img src="/vs.png" alt="vs" width="auto" height={80} />
            </Paper>
          </Stack>
          <Paper sx={{ background: "transparent", mb: 2 }} elevation={0} square>
            <img
              src={`/${pokemonsData.player2.name}.png`}
              alt="Fight"
              width={270}
              height={80}
            />
          </Paper>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-around"}
          gap={2}
          width="80%"
        >
          <FightCard
            pokemon={pokemonsData.player1}
            isAttacker={player1isAttacker}
            setMove={setMoveOne}
          />
          <Stack justifyContent="center" alignItems="center" gap={2}>
            <Button
              sx={{
                background: "transparent",
                cursor: "pointer",
                padding: "5px",
                borderRadius: "50%",
                transition: "transform 0.2s, filter 0.2s",
                "&:hover": {
                  transform: "scale(1.1)",
                  filter: "brightness(1.2)",
                },
              }}
              onClick={onLaunchAttack}
            >
              <img
                src="/launch-attack.png"
                alt="Fight"
                width="auto"
                height={40}
              />
            </Button>
            <Typography>damage caused by last attack: {damage}</Typography>
          </Stack>
          <FightCard
            pokemon={pokemonsData.player2}
            isAttacker={!player1isAttacker}
            setMove={setMoveTwo}
          />
        </Stack>
      </Stack>
    </Layout>
  );
};

export default Game;
