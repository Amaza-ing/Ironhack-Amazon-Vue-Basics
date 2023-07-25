<script setup>
import { computed, ref } from 'vue';

const text = ref("hello");
const checked = ref(false)

const textLength = computed(() => {
  return text.value.length;
})

const onSubmit = function() {
  console.log("Form submitted");
}
</script>

<template>
  <section class="input-component">
    <h2>This is a component with inputs</h2>
  
    <form @submit.prevent="onSubmit">
      {{ text }} - {{ textLength }}
      <br>
      <input v-model="text">
    
      <br>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
  
      <br>
      <button>Submit</button>
    </form>
  </section>
</template>

<style>
.input-component {
  background-color: lightblue;
}
</style>