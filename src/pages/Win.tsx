import { Paper, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { State } from "../store/store.types";
import Layout from "../layout/Layout";

const Win = () => {
  const navigate = useNavigate();
  const pokemonsData = useSelector((state: State) => state.pokemon);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const pokemonWin = queryParams.get("pokemonWin") as "player1" | "player2";
  const { name, image } = pokemonsData[pokemonWin];

  return (
    <Layout>
      <Button
        variant="outlined"
        color="error"
        sx={{ position: "absolute", top: 16, right: 16 }}
        onClick={() => navigate("/")}
      >
        Jugar de nuevo
      </Button>

      <Paper sx={{ background: "transparent", mb: 2 }} elevation={0} square>
        <img src={`/${name}.png`} alt="vs" width="auto" height={80} />
      </Paper>
      <Paper sx={{ background: "transparent", mb: 2 }} elevation={0} square>
        <img src="/win.png" alt="vs" width="auto" height={80} />
      </Paper>
      <Paper sx={{ background: "transparent", mb: 2 }} elevation={0} square>
        <img src={image} alt="vs" width="auto" height={180} />
      </Paper>
    </Layout>
  );
};

export default Win;
