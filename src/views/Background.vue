<template>
  <MainContainer
    :title="title"
    :quote="quote">
    <BackgroundList id="background-list-container"/>
  </MainContainer>
</template>


<script>
import MainContainer from '@/components/MainContainer.vue';
import BackgroundList from '@/components/BackgroundList.vue';

export default {
  name: 'Background',
  components: {
    MainContainer,
    BackgroundList
  },
  data() {
    return {
      title: 'Background',
      quote: 'What have I been up to?'
    };
  }
};
</script>

<style scoped>
</style>
