<template>
  <MainContainer
    :title="title"
    :quote="quote">
    <ExampleContainer>
      <ExampleItem
        v-for="example in portfolioExamples"
        :key="example.title"
        :title="example.title"
        @open="loadModal(example)"/>
    </ExampleContainer>
    <!-- use the modal component, pass in the prop -->
    <Modal
      :show="showModal"
      :example="passedExample"
      @close="showModal = false"/>
  </MainContainer>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';
import ExampleContainer from '@/components/ExampleContainer.vue';
import ExampleItem from '@/components/ExampleItem.vue';
import Modal from '@/components/Modal.vue';

export default {
  components: {
    MainContainer,
    ExampleContainer,
    ExampleItem,
    Modal
  },
  data() {
    return {
      title: 'Portfolio',
      quote: "Hello, I'm CJ Haviland.",
      showModal: false,
      passedExample: {}
    };
  },
  computed: {
    portfolioExamples() {
      return this.$store.getters.getPortfolioExamples;
    }
  },
  methods: {
    // Show modal and pass it the clicked on example
    loadModal(item) {
      this.showModal = true;
      this.passedExample = item;
    }
  }
};
</script>
