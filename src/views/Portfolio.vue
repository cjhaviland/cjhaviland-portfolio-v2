<template>
    <BorderDiv
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
    </BorderDiv>
</template>

<script>
import BorderDiv from "@/components/BorderDiv.vue";
import ExampleContainer from "@/components/ExampleContainer.vue";
import ExampleItem from "@/components/ExampleItem.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    BorderDiv,
    ExampleContainer,
    ExampleItem,
    Modal
  },
  data() {
    return {
      title: "Portfolio",
      quote: "I made this.",
      showModal: false,
      passedExample: {}
    };
  },
  computed: {
    pageStyles() {
      return this.$store.getters.getPageStyles(this.$route.name);
    },
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
