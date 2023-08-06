import { Dispatch, FC, SetStateAction, useState } from "react";
import { Stack, Paper, Typography, Button, Chip } from "@mui/material";
import { Pokemon, Move } from "../../store/store.types";

interface FightCardProps {
  pokemon: Pokemon;
  isAttacker: boolean;
  setMove: Dispatch<SetStateAction<string>>;
}

const FightCard: FC<FightCardProps> = ({ pokemon, isAttacker, setMove }) => {
  const [selectedMove, setSelectedMove] = useState<Move | null>(
    pokemon.moves[0]
  );

  const handleMoveClick = (move: Move) => {
    setMove(move.name);
    setSelectedMove(move === selectedMove ? null : move);
  };

  return (
    <Paper
      sx={{
        position: "relative",
        background: "rgba(248, 248, 248, 0.9)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        height: "300px",
        borderRadius: "15px",
        width: "220px",
      }}
      elevation={0}
      square
    >
      {isAttacker && (
        <Stack
          sx={{
            position: "absolute",
            top: 3,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img src="/attacker.png" alt="Attacker" width={80} height={35} />
        </Stack>
      )}
      <img src={pokemon.image} alt={pokemon.name} width="auto" height={130} />
      <Typography variant="subtitle1">attacking movement:</Typography>
      <Stack direction="row" gap={2} flexWrap="wrap">
        {pokemon.moves.map((move) => (
          <Button
            variant={selectedMove === move ? "contained" : "text"}
            onClick={() => handleMoveClick(move)}
            style={{ width: "100px", fontSize: "10px" }}
            key={move.name}
            disabled={!isAttacker}
          >
            {move.name}
          </Button>
        ))}
      </Stack>
      <Stack mt={3}>
        <Chip
          label={`HP: ${pokemon.currentHP}/${pokemon.totalHP}`}
          color="primary"
          variant="outlined"
        />
      </Stack>
    </Paper>
  );
};

export default FightCard;
