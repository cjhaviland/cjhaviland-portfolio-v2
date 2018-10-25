<template>
    <nav class="d-flex">
      <NavItem
        v-for="route in routes" 
        :key="route.name"
        :route="route">
        </NavItem>
    </nav>
</template>

<script>
  import NavItem from "@/components/NavItem.vue";

  export default {
    name: "Nav",
    components: {
      NavItem
    },
    data() {
      return {
        routes: [
          { name: "about",  title: "About Me", route: "/"},
          { name: "background", title: "Background", route: "background"},
          { name: "skills",  title: "Skills", route: "skills"},
          { name: "portfolio",  title: "Portfolio", route: "portfolio"},
          { name: "contact",  title: "Contact Me", route: "contact"}
        ]
      };
    }
  };
</script>

<style scoped>
  nav {
    text-align: center;
    height: 100%;
  }
</style>