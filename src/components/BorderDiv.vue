<template>
  <div id="border-div" :style="borderStyle">
    <h1 id="page-title" class="secondary--text  display-4">{{this.$props.title}}</h1>
    <span id="page-quote" class="accent--text display-1 font-italic"> {{this.$props.quote}}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BorderDiv",
  props: ['quote', 'title'],
  data() {
    return {};
  },
  computed: {
    borderStyle: function () {
      return {
        border: `2px solid ${this.$vuetify.theme.info}`,
        outline: `2px solid ${this.$vuetify.theme.info}`
      }
    }
  }
};
</script>

<style scoped>
  #border-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 2%;
    outline-offset: 10px;
    overflow: auto;
  }

</style>

