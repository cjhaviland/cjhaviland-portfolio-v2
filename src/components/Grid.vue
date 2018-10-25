<template>
  <div class="grid">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "grid"
};
</script>

<style>
.grid {
  display: grid;
}
</style>
