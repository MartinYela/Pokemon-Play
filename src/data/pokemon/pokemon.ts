import pokeApi from "../../config/pokeAPI";
import { Pokemon } from "../../store/store.types";
import { DamageResponse, GetDamageCausedParams } from "./pokemon.types";

export const getRandomPokemons = async () => {
  const response = await pokeApi.get<Pokemon[]>(
    "/pokemon/getFiveRandomPokemons"
  );

  return new Promise<Pokemon[]>((resolve, reject) => {
    if (response.status === 200) resolve(response.data);
    else reject(response.data);
  });
};

export const getDamage = async (
  data: GetDamageCausedParams
): Promise<DamageResponse> => {
  const response = await pokeApi.post("/pokemon/calculateDamage", data);

  return new Promise((resolve, reject) => {
    if (response.status === 200) resolve(response.data as DamageResponse);
    else reject(response.data);
  });
};
