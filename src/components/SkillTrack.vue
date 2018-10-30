<template>
  <section class="skill-track">
    <h3>{{trackHeader}}</h3>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "SkillTrack",
  props: ["trackHeader"]
};
</script>
