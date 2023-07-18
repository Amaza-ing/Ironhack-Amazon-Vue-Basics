<script setup>
const options = ["Profile", "Pictures", "Video", "About Us"];
</script>

<template>
  <nav class="navbar">
    <h2>Navbar component</h2>
    <ul class="nav-list">
      <!-- <li>Profile</li>
      <li>Pictures</li>
      <li>Video</li> -->
      <li v-for="(option, index) in options" :key="index">
        {{ index + 1 }} - {{ option }}
      </li>
    </ul>
  </nav>
</template>

<style>
.navbar {
  background-color: orange;
}

.nav-list {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
}
</style>