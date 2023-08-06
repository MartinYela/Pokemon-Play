import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { getDamage, getRandomPokemons } from "./pokemon";
import {
  editPlayer1,
  editPlayer2,
  getPokemons,
} from "../../store/pokemons/pokemonsSlice";
import { Pokemon } from "../../store/store.types";
import { DamageResponse, GetDamageCausedParams } from "./pokemon.types";

export const useFiveRandomPokemons = () => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onGetFiveError = () => {
    setError(error);
  };

  const onGetFiveSuccess = (data: Pokemon[]) => {
    setError(false);
    dispatch(getPokemons(data));
  };

  const { mutate } = useMutation(getRandomPokemons, {
    onError: onGetFiveError,
    onSuccess: onGetFiveSuccess,
  });

  const getFiveRandom = () => {
    mutate();
  };

  return {
    error,
    getFiveRandom,
  };
};

export const useDamageCaused = (player1isAttacker: boolean) => {
  const [error, setError] = useState<boolean>(false);
  const [damage, setDamage] = useState<number | null>(null);
  const dispatch = useDispatch();

  const onGetDamageError = () => {
    setError(error);
  };

  const onGetDamageSuccess = (data: DamageResponse) => {
    setError(false);
    setDamage(data.damageDealt);
    if (player1isAttacker) {
      dispatch(editPlayer2(data.damageDealt));
    } else {
      dispatch(editPlayer1(data.damageDealt));
    }
  };

  const { mutate } = useMutation(getDamage, {
    onError: onGetDamageError,
    onSuccess: onGetDamageSuccess,
  });

  const getDamageCaused = (data: GetDamageCausedParams) => {
    mutate(data);
  };

  return {
    error,
    getDamageCaused,
    damage,
  };
};
