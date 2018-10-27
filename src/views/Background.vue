<template>
    <BorderDiv
      :title="title"
      :quote="quote">
      <BackgroundList id="background-list-container"/>
    </BorderDiv>
</template>


<script>
import BorderDiv from "@/components/BorderDiv.vue";
import BackgroundList from "@/components/BackgroundList.vue";

export default {
  name: "background",
  components: {
    BorderDiv,
    BackgroundList
  },
  data() {
    return {
      title: "Background",
      quote: `Hi, I'm CJ Haviland`
    };
  }
};
</script>

<style scoped>
</style>
