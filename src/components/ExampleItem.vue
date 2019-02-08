<template>
  <div
    class="example-item"
    @click="$emit('open')">
    <h3 name="label">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ExampleItem',
  props: {
    title: {
      type: String,
      default: ''
    }
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
  min-height: 100px;
  max-height: 200px;
  width: 100%;
  min-width: 150px;
}

.example-item h3 {
  font-size: 1em;
}

.example-item:hover {
  opacity: 0.5;
}
</style>
