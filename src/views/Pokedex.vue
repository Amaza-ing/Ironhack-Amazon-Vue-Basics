<script setup>
import { usePokemonStore } from "@/stores/pokemonStore"
import { onMounted, ref } from "vue";

const pokemonStore = usePokemonStore();

// const pokemonList = ref([]);
const selectedPokemon = ref({});

// const fetchPokemon = async (total) => {
//   for (let i = 1; i < total; i++) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//     const data = await response.json();
//     pokemonList.value.push(data);
//   }
// };

const selectPokemon = (pokemon) => {
  selectedPokemon.value = pokemon;
};

// onMounted(() => {
//   pokemonStore.fetchPokemon(50);
// });
</script>

<template>
  <h2>Pokedex</h2>
  <RouterLink :to="{ name: 'home' }">
    <h3>Go Home</h3>
  </RouterLink>

  <section v-if="selectedPokemon.name">
    <RouterLink
      :to="{ name: 'pokemon', params: { pokemon: selectedPokemon.id } }"
      class="selected-pokemon"
    >
      <p>{{ selectedPokemon.name }}</p>
      <img :src="selectedPokemon.sprites.front_default" width="200" />
    </RouterLink>
  </section>

  <ul class="pokedex">
    <li
      v-for="pokemon in pokemonStore.pokemonList"
      class="pokemon-card"
      @click="selectPokemon(pokemon)"
    >
      <p class="pokemon-name">{{ pokemon.name }}</p>
      <img :src="pokemon.sprites.front_default" />
      <p>{{ pokemon.weight }}</p>
    </li>
  </ul>
</template>

<style>
.selected-pokemon {
  background-color: blue;
  color: white;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-decoration: none;
}

.pokedex {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.pokemon-card {
  background-color: aquamarine;
  border: 3px solid black;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pokemon-card:hover {
  background-color: lightgreen;
  cursor: pointer;
}

.pokemon-name {
  width: 100%;
  background-color: lightgreen;
  margin: 0;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
}

.pokemon-card:hover .pokemon-name {
  background-color: green;
  color: white;
}
</style>
