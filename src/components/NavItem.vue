<template>
  <router-link
    class="nav-item"
    :to="route.route"
    :style="{backgroundColor: `var(--${route.name}-background)`}">
      <span class="route-title">
        {{ route.title }}
      </span>
  </router-link>
</template>

<script>
export default {
  name: "NavItem",
  props: ["route"]
};
</script>

<style scoped>
.nav-item {
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  min-width: 20%;
}

.nav-item span:hover {
  transform: scale(1.1);
}

.route-title {
  padding: 0px 10px 0px 10px;
}
</style>
