<script setup>
const emit = defineEmits(["view-content"]);

const content = "Lorem ipsum";

const viewContent = function() {
  console.log("some content");
  emit("view-content", content);
}
</script>

<template>
  <h2>This is the text component</h2>
  <slot>
    <p>Fallback content</p>
  </slot>
  <p>some content</p>
  <slot name="potato"></slot>

  <br>
  <button @click="viewContent">View content</button>
</template>

<style></style>