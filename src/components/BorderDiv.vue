<template>
  <div id="border-div" :style="defaultTextColor">
    <h1 id="page-title" :style="titleColor">{{this.$props.title}}</h1>
    <h2 id="page-quote" :style="quoteColor"> {{this.$props.quote}}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BorderDiv",
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
#border-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 85%;
  width: 95%;
  outline-offset: 10px;
  overflow: auto;
}

#border-div::-webkit-scrollbar {
  width: 0.2em;
}

#border-div::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

#border-div::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
