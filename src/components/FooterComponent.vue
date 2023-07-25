<script setup>
const props = defineProps({
  nameProp: String,
  age: {
    type: Number,
    required: true
  },
  street: {
    type: String,
    default: "Fake street, 123"
  }
})

const getInfo = function() {
  return props.nameProp + " " + props.age + " " + props.street
}
</script>

<template>
  <section class="footer">
    <h2>This is the footer</h2>
    <p>{{ nameProp }} - {{ age }} - {{ street }}</p>
    <p>{{ getInfo() }}</p>
  </section>
</template>

<style>
.footer {
  background-color: lightcoral;
}
</style>