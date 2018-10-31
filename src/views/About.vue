<template>
    <MainContainer
    :title="title"
    :quote="quote">
      <div id="about-me-container">
        <p>I obtained my degree in Information Systems and Technology with a focus in Networking, however the courses I always found most engaging were in programming. After a networking internship and a tech support job, I moved into a support position in the software field.</p>
        <p>Working for a software company reignited my drive to code. I began to take on as many additional assignments and responsibilities outside of my support role as possible. I also remained committed to furthering my development knowledge outside of work with online certifications, courses, and code camps. Ultimately I moved into a development role where I have been responsible for designing the new customer portal.</p>
        <p>I do a lot of coding in my free time for fun as well, but when I am not coding I also enjoy audio recording, tabletop gaming, knitting, and spending time with my family. My wife and I just welcomed a baby boy into the world in November and couldn't be more thrilled!</p>
        <p>I consider myself to be a motivated, critiically-thinking developer who keeps up with current trends and thrives on a team. I am big proponent of agile development and best practices. I am currently enjoying the work that I am do and am learning a lot. However I am open to offers and would love the opportunity to work more with JavaScript frameworks.</p>
      </div>
    </MainContainer>
</template>

<script>
import MainContainer from "@/components/MainContainer.vue";

export default {
  components: {
    MainContainer
  },
  data() {
    return {
      title: "About",
      quote: "So you want to get to know me?"
    };
  }
};
</script>

<style scoped>
#about-me-container {
  line-height: 1.4em;
}
</style>
