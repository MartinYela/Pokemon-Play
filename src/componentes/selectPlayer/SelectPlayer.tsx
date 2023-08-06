import { FC, useEffect } from "react";
import { Paper, Typography, Stack, Button } from "@mui/material";
import Layout from "../../layout/Layout";
import { useFiveRandomPokemons } from "../../data/pokemon/hooks";
import { useDispatch, useSelector } from "react-redux";
import { Pokemon, State } from "../../store/store.types";
import PokemonCard from "../PokemonCard";
import { SelectPlayerPops } from "./SelectPlayer.types";
import {
  selectPlayer1,
  selectPlayer2,
} from "../../store/pokemons/pokemonsSlice";

const SelectPlayer: FC<SelectPlayerPops> = ({
  image,
  setStatusGame,
  statusGame,
}) => {
  const { error, getFiveRandom } = useFiveRandomPokemons();
  const { pokemons } = useSelector((state: State) => state.pokemon);

  useEffect(() => {
    getFiveRandom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const player1: Pokemon | null = JSON.parse(
    localStorage.getItem("player1") || "null"
  );
  const player2: Pokemon | null = JSON.parse(
    localStorage.getItem("player2") || "null"
  );
  const player1isAttacker: boolean =
    !!localStorage.getItem("player1isAttacker");

  const hasSavedGame: boolean = !!player1 && !!player2 && !!player1isAttacker;

  const dispatch = useDispatch();
  const onPlaySavedGame = () => {
    dispatch(selectPlayer1({ pokemon: player1 }));
    dispatch(selectPlayer2({ pokemon: player2 }));

    !!player1 && !!player2 && !!player1isAttacker && setStatusGame(3);
  };

  return (
    <Layout>
      {hasSavedGame && (
        <Button
          variant="text"
          color="error"
          sx={{ position: "absolute", top: 16, right: 16 }}
          onClick={onPlaySavedGame}
        >
          Recuperar partida
        </Button>
      )}
      <Paper sx={{ background: "transparent", mb: 2 }} elevation={0} square>
        <img src={image} alt="Logo Pokemon" width="auto" height={130} />
      </Paper>
      {error && <Typography color="red">Ha habido un error</Typography>}
      {pokemons && (
        <Stack direction="row" gap={2} mb={10}>
          {pokemons?.map((pokemon: Pokemon) => {
            return (
              <PokemonCard
                pokemon={pokemon}
                key={pokemon.image}
                setStatusGame={setStatusGame}
                statusGame={statusGame}
              />
            );
          })}
        </Stack>
      )}
    </Layout>
  );
};

export default SelectPlayer;
