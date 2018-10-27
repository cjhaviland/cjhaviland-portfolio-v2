<template>
    <v-app id="app">
      <div class="main-container" :style="mainBackground">
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
  data() {
    return {
      mainBackground: { backgroundColor: "var(--about-background)" }
    };
  },
  watch: {
    $route(to, from) {
      // Watcher on route to change the current views theme
      this.mainBackground.backgroundColor = `var(--${to.name}-background)`;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Raleway:400, 900");

html {
  font-size: calc(100% + 0.5vw);
}

main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container {
  height: 100%;
  display: grid;
  grid-template-rows: 15vh auto;
}

</style>
