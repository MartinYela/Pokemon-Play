import {
  FormControl,
  Stack,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

import { useForm } from "../hooks/useForm";
import Layout from "../layout/Layout";
import { useLogin } from "../data/auth/hooks";
import { FormEvent } from "react";

const Login = () => {
  const [formValues, handleInputChange] = useForm({ email: "", password: "" });
  const { email, password } = formValues;

  const { error, handleLogin } = useLogin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <Layout>
      <FormControl
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mb: 2,
          backgroundColor: "white",
          minWidth: "275px",
          minHeight: "300px",
          borderRadius: "15px",
        }}
      >
        <Stack spacing={1} pt={2} pb={2} gap={3} alignItems="center">
          <Paper sx={{ background: "transparent" }} elevation={0} square>
            <img
              src="/pokemon-Logo.png"
              alt="Logo Pokemon"
              width="auto"
              height={130}
            />
          </Paper>

          <Stack
            flexWrap="wrap"
            alignItems="center"
            width="100%"
            gap={2}
            spacing={0}
          >
            <TextField
              label="Email"
              type="search"
              variant="standard"
              name="email"
              value={email}
              onChange={handleInputChange}
              sx={{ width: "70%" }}
            />
            <TextField
              label="Contraseña"
              type="password"
              variant="standard"
              name="password"
              value={password}
              onChange={handleInputChange}
              sx={{ width: "70%" }}
            />
          </Stack>
          <Stack pt={2} width="100%" alignItems="center" pb={2}>
            <Button
              variant="contained"
              size="small"
              sx={{ width: "70%" }}
              type="submit"
            >
              Ingresar
            </Button>
          </Stack>
        </Stack>
        {error && (
          <Typography
            variant="subtitle1"
            textAlign="center"
            sx={{ color: "red" }}
          >
            Email o contraseña incorrectas
          </Typography>
        )}
      </FormControl>
    </Layout>
  );
};

export default Login;
