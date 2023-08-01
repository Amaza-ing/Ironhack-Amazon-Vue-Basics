<script setup>
import { usePokemonStore } from '@/stores/pokemonStore';
import { onMounted } from 'vue';

const pokemonStore = usePokemonStore();

onMounted(() => {
  pokemonStore.fetchPokemon(50);
})
</script>

<template>
  <h1>My Page</h1>
  <RouterView></RouterView>
</template>

<style>
</style>