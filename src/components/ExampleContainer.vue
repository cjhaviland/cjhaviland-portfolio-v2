<template>
  <section class="example-container">
    <slot />
  </section>
</template>

<script>
export default {
  name: 'ExampleContainer',
  props: {
    groupTitle: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
section.example-container {
  margin: 3% 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: repeat(2, max-content);
  grid-gap: 1em;
  justify-content: space-evenly;
}
</style>
