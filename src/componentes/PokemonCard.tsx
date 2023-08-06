import { useState } from "react";
import { useDispatch } from "react-redux";
import { Stack, Paper, Typography } from "@mui/material";

import { Pokemon } from "../store/store.types";
import { selectPlayer1, selectPlayer2 } from "../store/pokemons/pokemonsSlice";

interface PokemonCardProps {
  pokemon: Pokemon;
  setStatusGame: React.Dispatch<React.SetStateAction<number>>;
  statusGame: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  setStatusGame,
  statusGame,
}) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const boxShadow = hovered ? "0px 6px 12px rgba(0, 0, 0, 0.3)" : "none";
  const cursor = hovered ? "pointer" : "default";

  const onClick = () => {
    if (statusGame === 1) dispatch(selectPlayer1({ pokemon }));
    if (statusGame === 2) dispatch(selectPlayer2({ pokemon }));

    setStatusGame((prevValue) => prevValue + 1);
  };

  return (
    <Stack
      sx={{
        mb: 4,
        backgroundColor: "rgba(255, 215, 0, 0.8)",
        width: "200px",
        height: "280px",
        borderRadius: "15px",
        boxShadow: boxShadow,
        cursor: cursor,
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <Paper
        sx={{
          background: "rgba(248, 248, 248, 0.9)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          height: "100%",
          borderRadius: "15px",
        }}
        elevation={0}
        square
      >
        <img
          src={pokemon.image}
          alt={pokemon.name}
          width="auto"
          height={130}
          style={{ marginBottom: "10px" }}
        />
        <Typography variant="h6" gutterBottom>
          {pokemon.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Type: {pokemon.type}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          HP: {pokemon.totalHP}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Attack: {pokemon.baseAttack}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Defense: {pokemon.baseDefense}
        </Typography>
      </Paper>
    </Stack>
  );
};

export default PokemonCard;
