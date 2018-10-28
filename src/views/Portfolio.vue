<template>
    <MainContainer
    :title="title"
    :quote="quote">
      <ExampleContainer>
        <ExampleItem
        v-for="example in portfolioExamples"
        :key="example.title"
        :title="example.title"
        @open="loadModal(example)">
        </ExampleItem>
      </ExampleContainer>
      <!-- use the modal component, pass in the prop -->
      <Modal :show="showModal" :example="passedExample" @close="showModal=false">
      </Modal>
    </MainContainer>
</template>

<script>
import MainContainer from "@/components/MainContainer.vue";
import ExampleContainer from "@/components/ExampleContainer.vue";
import ExampleItem from "@/components/ExampleItem.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    MainContainer,
    ExampleContainer,
    ExampleItem,
    Modal
  },
  data() {
    return {
      title: "Portfolio",
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
    loadModal: function(item) {
      this.showModal = true;
      this.passedExample = item;
    }
  }
};
</script>
