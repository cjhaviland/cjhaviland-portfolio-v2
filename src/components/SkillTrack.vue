<template>
  <section class="skill-track">
    <h3>{{ trackHeader }}</h3>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'SkillTrack',
  props: {
    trackHeader: {
      type: String,
      default: ''
    }
  }
};
</script>
