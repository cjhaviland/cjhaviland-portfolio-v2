<template>
    <v-app id="app">
      <div class="main-container primary">
        <section id="nav-container">
          <Nav />
        </section>
        <main>
            <router-view />
        </main>
      </div>
    </v-app>
</template>


<script>
// @ is an alias to /src
import Nav from "@/components/Nav.vue";

export default {
  name: "app",
  components: {
    Nav
  },
  watch: {
    $route(to, from) { // Watcher on route to change the current views theme
      let pageStyles = this.$store.getters.getPageStyles(to.name);
      this.$vuetify.theme.primary = pageStyles.primary;
      this.$vuetify.theme.secondary = pageStyles.secondary;
      this.$vuetify.theme.accent = pageStyles.accent;
      this.$vuetify.theme.error = pageStyles.error;
      this.$vuetify.theme.info = pageStyles.info;
      this.$vuetify.theme.success = pageStyles.success;
      this.$vuetify.theme.warning = pageStyles.warning;
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:400, 900');
  
  html {
    font-size: 2.5vw;
  }
  
  main {
    height: 85vh;
    margin-top: 1%;
    padding: 2%;
  }
  
  #nav-container {
    height: 15vh;
  }

  #app {
    font-family: 'Raleway', sans-serif;
  }
</style>