<template>
  <div class="example-item" @click="$emit('open')">
    <h2 name="label">{{title}}</h2>
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
  height: 15vw;
  width: 20vw;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.example-item:hover {
  opacity: 0.5;
}

.example-item h2 {
  font-size: 1em;
  line-height: 1.1em;
  text-align: center;
}
</style>
