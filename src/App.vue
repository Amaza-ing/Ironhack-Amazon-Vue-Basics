<script setup>
import NavBar from './components/NavBar.vue'
import Inputs from './components/Inputs.vue'
import { ref } from 'vue';

let name = "Adrián";
const age = ref("10");
const myId = "welcome-message";
const myClass = ref("highlighted");

const writeName = function() {
  name = "new name";
  console.log(name);
}

const addOneToAge = function() {
  age.value++;
}
</script>

<template>
  <NavBar></NavBar>

  <h1 :id="myId" :class="myClass">Hello World</h1>
  <section class="text">
    <p>Lorem ipsum dolor sit amet.</p>
    <p>My name is {{ name }}</p>
    <p>My age is {{ age }}</p>
    <p v-if="age >= 18">You can now drive and drink</p>
    <p v-else>You are a minor</p>
  </section>
  <button @click="writeName">Write Name</button>
  <button @click="addOneToAge">Change Age</button>

  <Inputs></Inputs>
</template>

<style>
.text {
  background-color: blue;
  color: white;
  font-size: 30px;
}

#welcome-message {
  background-color: green;
}

.highlighted {
  color: yellow;
}
</style>