<template>
  <div
    id="container"
    :style="mainBackground">
    <Nav />
    <router-view />
  </div>
</template>


<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';

export default {
  name: 'App',
  components: {
    Nav
  },
  data() {
    return {
      mainBackground: { backgroundColor: '' }
    };
  },
  watch: {
    $route(to) {
      // Watcher on route to change the current views theme
      this.mainBackground.backgroundColor = `var(--${to.name}-background)`;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato|Oswald|Raleway");

#container {
  height: 100%;
  display: grid;
  grid-template-rows: 15vh auto;
}
</style>
