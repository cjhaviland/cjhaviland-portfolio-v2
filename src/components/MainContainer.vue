<template>
  <main id="main-container">
    <h1 id="page-title" :style="titleColor">{{this.$props.title}}</h1>
    <h2 id="page-quote"> {{this.$props.quote}}</h2>
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
    }
  }
};
</script>

<style scoped>
#page-content {
  display: grid;
  justify-self: center;
  justify-items: center;
  outline-offset: 10px;
  width: 80%;
}

#page-quote {
  color: var(--primary-text);
}

#page-quote {
  color: var(--primary-text);
}
</style>
