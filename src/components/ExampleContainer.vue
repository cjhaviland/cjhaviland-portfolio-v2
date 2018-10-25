<template>
  <section class="example-container">
    <slot />
  </section>
</template>

<script>
export default {
  name: "ExampleContainer",
  props: ["groupTitle"]
};
</script>

<style scoped>
section.example-container {
  margin-top: 3%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 3em;
  justify-items: center;
}
</style>
