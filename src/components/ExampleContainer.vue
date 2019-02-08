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
  grid-template-columns: repeat(auto-fill, minmax(250px, 400px));
  grid-gap: 30px;
  justify-content: space-around;
}
</style>
