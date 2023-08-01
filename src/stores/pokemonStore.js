import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonStore = defineStore("pokemonStore", () => {
  const pokemonList = ref([]);

  const fetchPokemon = async (total) => {
    for (let i = 1; i < total; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      pokemonList.value.push(data);
    }
  }

  return { pokemonList, fetchPokemon }
})