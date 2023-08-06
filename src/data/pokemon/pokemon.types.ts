import { Pokemon } from "../../store/store.types";

export interface DamageResponse {
  damageDealt: number;
}

export interface GetDamageCausedParams {
  attackerPokemon: Pokemon;
  moveType: string;
  defenderPokemon: Pokemon;
}
