<template>
    <MainContainer
    :title="title"
    :quote="quote">
      <div id="contact-container">
      <div>
        <p>If you are looking to add a new developer to your team I would love to hear from you!</p>
        <p> Please view my resume and GitHub on the right, and let's set up an interview!</p>
      </div>
        <div id="professional-links">
          <a 
            v-for="button in buttons" 
            :key="button.title"
            :href="button.link" target="_blank">
            <font-awesome-icon  :icon="button.icon" />
          </a>
        </div>
      </div>
    </MainContainer>
</template>

<script>
import MainContainer from "@/components/MainContainer.vue";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAt, faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default {
  components: {
    MainContainer
  },
  data() {
    return {
      title: "Contact",
      quote: "Enough about me, let's talk about you!",
      buttons: [
        {
          link: "mailto:Cj.haviland@yahoo.com",
          title: "E-Mail",
          icon: faAt
        },
        {
          link: "https://github.com/cjhaviland",
          title: "GitHub",
          icon: faGithub
        },
        {
          link: "https://www.linkedin.com/in/cj-haviland/",
          title: "LinkedIn",
          icon: faLinkedinIn
        },
        {
          link:
            "https://drive.google.com/file/d/1NFMI2DlCGHxuYn3r7vAtaUAgkTOgjhL8/view",
          title: "View My Resume",
          icon: faAddressCard
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
$background: #86d889;
$text: #465660;

#contact-container {
  display: grid;
  grid-template-rows: max-content auto;
  text-align: center;
}

#professional-links {
  display: grid;
  grid-template-columns: repeat(4, max-content);
  grid-template-rows: max-content;
  justify-content: space-evenly;
}

a {
  background-color: $background;
  border-radius: 100%;
  color: $text;
  padding: 20px;

  svg:hover{
    transform: scale(1.5);
  }

  &:visited {
    color: $text;
  }

  &:active {
    color: $text;
  }
}
</style>