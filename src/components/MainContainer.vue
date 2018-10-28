<template>
  <main id="main-container" :style="defaultTextColor">
    <h1 id="page-title" :style="titleColor">{{this.$props.title}}</h1>
    <h2 id="page-quote" :style="quoteColor"> {{this.$props.quote}}</h2>
    <div id="page-content">
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
  name: "MainContainer",
  props: ["quote", "title"],
  data() {
    return {};
  },
  computed: {
    titleColor: function() {
      return {
        color: `var(--${this.$route.name}-title)`
      };
    },
    quoteColor: function() {
      return {
        color: `var(--${this.$route.name}-quote)`
      };
    },
    defaultTextColor: function() {
      return {
        color: `var(--${this.$route.name}-text)`
      };
    }
  }
};
</script>

<style scoped>
#page-content {
  display: grid;
  justify-items: center;
  outline-offset: 10px;
  overflow: auto;
}

#page-content::-webkit-scrollbar {
  width: 0.2em;
}

#page-content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#page-content::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
