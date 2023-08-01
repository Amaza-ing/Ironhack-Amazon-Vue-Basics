<script setup>
import { usePokemonStore } from "@/stores/pokemonStore";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const pokemonStore = usePokemonStore();

const route = useRoute();

const pokemon = ref({});

const fetchPokemon = async () => {
  const id = route.params.pokemon;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  pokemon.value = data;
};

onMounted(() => {
  fetchPokemon();
});

watch(
  () => route.params.pokemon,
  () => {
    fetchPokemon();
  }
)
</script>

<template>
  <h2>Pokemon {{ route.params.pokemon }}</h2>

  <section v-if="pokemon.name" class="selected-pokemon">
    <p>{{ pokemon.name }}</p>
    <img :src="pokemon.sprites.front_default" />
  </section>

  <RouterLink
    :to="{ name: 'pokemon', params: { pokemon: +route.params.pokemon + 1 } }"
  >
    <h3>Next One</h3>
  </RouterLink>

  <RouterLink :to="{ name: 'pokedex'}">
    <p>Pokedex</p>
  </RouterLink>

  <ul>
    <li v-for="pokemon in pokemonStore.pokemonList">
      <RouterLink :to="{ name: 'pokemon', params: { pokemon: pokemon.id}}">
        {{ pokemon.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style></style>
