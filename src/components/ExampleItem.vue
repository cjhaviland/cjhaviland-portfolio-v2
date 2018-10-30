<template>
  <div class="example-item" @click="$emit('open')">
    <h3 name="label">{{title}}</h3>
  </div>
</template>

<script>
export default {
  name: "ExampleItem",
  props: {
    title: {}
  }
};
</script>

<style scoped>
.example-item {
  background-color: var(--portfolio-title);
  color: var(--link-text);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12vw;
  width: 15vw;
}

.example-item h3 {
  font-size: calc(100% + 0.1vw);
}

.example-item:hover {
  opacity: 0.5;
}
</style>
