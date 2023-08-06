import { FC, useEffect } from "react";
import { Paper, Typography, Stack } from "@mui/material";
import Layout from "../../layout/Layout";
import { useFiveRandomPokemons } from "../../data/pokemon/hooks";
import { useSelector } from "react-redux";
import { Pokemon, State } from "../../store/store.types";
import PokemonCard from "../PokemonCard";
import { SelectPlayerPops } from "./SelectPlayer.types";

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

  return (
    <Layout>
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
