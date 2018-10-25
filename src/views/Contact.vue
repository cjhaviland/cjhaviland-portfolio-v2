<template>
    <BorderDiv
    :title="title"
    :quote="quote">
      <div id="contact-container" class="info--text pa-4">
        <p class="body-1">If you are looking to add a new developer to your team I would love to hear from you! Please view my resume and GitHub on the right, and let's set up an interview!</p>
      </div>
      <div id="professional-links">
        <v-btn color="accent"
        fab
        href="mailto:Cj.haviland@yahoo.com" target="_blank">
          <v-icon color="info" title="cj.haviland@yahoo.com">fas fa-at</v-icon>
        </v-btn>
        <v-btn color="accent" 
        fab
        href="https://github.com/cjhaviland" target="_blank">
          <v-icon color="info" title="GitHub">fab fa-github</v-icon>
        </v-btn>
        <v-btn color="accent"
        fab
        href="" target="_blank">
          <v-icon color="info" title="LinkedIn">fab fa-linkedin-in</v-icon>
        </v-btn>
        <v-btn color="accent"
        fab
        href="https://drive.google.com/file/d/1NFMI2DlCGHxuYn3r7vAtaUAgkTOgjhL8/view" target="_blank">
          <v-icon color="info" title="View My Resume">far fa-address-card</v-icon>
        </v-btn>
      </div>
    </BorderDiv>
</template>

<script>
import BorderDiv from "@/components/BorderDiv.vue";

export default {
  components: {
    BorderDiv
  },
  data() {
    return {
      title: "Contact Me",
      quote: "But enough about me, let's talk!"
    };
  },
  computed: {
    pageStyles() {
      return this.$store.getters.getPageStyles(this.$route.name);
    }
  }
};
</script>
