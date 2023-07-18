<script setup>
import { ref } from 'vue';

const text = ref("hello");
const checked = ref(false)
</script>

<template>
  <h2>This is a component with inputs</h2>
  {{ text }}
  <br>
  <input v-model="text">

  <br>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
</template>

<style>
</style>