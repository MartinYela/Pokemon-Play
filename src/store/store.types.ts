export interface AuthState {
  status: AuthStatus;
  token: string;
}

export interface PokemonState {
  pokemons: Pokemon[];
  player1: Pokemon;
  player2: Pokemon;
}

export interface State {
  auth: AuthState;
  pokemon: PokemonState;
}

export enum AuthStatus {
  NotAuthenticated = "not-authenticated",
  Checking = "checking",
  Authenticated = "authenticated",
}

export interface PokemonCardProps {
  pokemon: Pokemon;
}

export interface Pokemon {
  level: number;
  name: string;
  type: string;
  currentHP: number;
  totalHP: number;
  baseAttack: number;
  baseDefense: number;
  baseSpecialAttack: number;
  baseSpecialDefense: number;
  baseSpeed: number;
  moves: Move[];
  image: string;
}

export interface Move {
  name: string;
  power: number;
}
