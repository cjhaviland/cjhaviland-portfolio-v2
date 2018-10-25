<template>
  <router-link
    class="nav-item"
    :to="route.route"
    :style="{ backgroundColor: pageStyles.primary }">
      <span class="route-title font-weight-black">
        {{ route.title }}
      </span>
  </router-link>
</template>

<script>
  export default {
    name: "NavItem",
    props: ['route'],
    computed: {
      pageStyles() {
        return this.$store.getters.getPageStyles(this.$props.route.name)
      }
    }
  }
</script>

<style scoped>
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
  }

  a:hover{
    background: linear-gradient(to top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.30) 100%);
  }

  .nav-item {
    width: 100%;
    min-width: 20%;
    box-shadow: 3px -5px 6px 0px #A5A0A2;
  }

  .router-link-active {
    color: red;
  }

  .route-title{
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    font-size: 2vw;
    letter-spacing: 2px;
    padding: 0px 10px 0px 10px;
    text-shadow: 
      0px 1px 0px #000,
      0px -1px 0px #000,
      1px 0px 0px #000,
      -1px 0px 0px #000;
    color: #fff;
  }
</style>
