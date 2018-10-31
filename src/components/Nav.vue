<template>
  <nav>
    <NavItem
      v-for="route in routes"
      :key="route.name"
      :route="route"/>
  </nav>
</template>

<script>
import NavItem from '@/components/NavItem.vue';

export default {
  name: 'Nav',
  components: {
    NavItem
  },
  data() {
    return {
      routes: [
        { name: 'portfolio', title: 'Portfolio', route: 'portfolio' },
        { name: 'background', title: 'Background', route: 'background' },
        { name: 'skills', title: 'Skills', route: 'skills' },
        { name: 'about', title: 'About', route: '/' },
        { name: 'contact', title: 'Contact', route: 'contact' }
      ]
    };
  }
};
</script>

<style scoped>
</style>
