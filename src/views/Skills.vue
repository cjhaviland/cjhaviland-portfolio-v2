<template>
    <BorderDiv
    :title="title"
    :quote="quote">
    <section id="skill-container" class="body-container">
      <div id="skill-labels">
        <span></span>
        <span id="novice">Novice</span>
        <span id="intermediate">Intermediate</span>
        <span id="advanced">Advanced</span>
        <span id="expert">Expert</span>
      </div>
      <div id="slider-container"
        v-for="skill in skills"
        :key="skill.name"
      >
        <label for="{skill.name}">{{skill.name}}</label>
        <input type="range" 
          min="1" max="4" 
          :value=skill.level class="slider" id="{skill.name}" disabled>
      </div>
    </section>
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
      title: "Skills",
      quote: "Will said skills pay the bills?",
      skills: [
        { name: "HTML5, CSS3", level: 3 },
        { name: "JavaScript", level: 3 },
        { name: "Node.js", level: 2 },
        { name: "React.js", level: 1 },
        { name: "Vue.js", level: 2 },
        { name: "SQL", level: 3 },
        { name: "Python", level: 1 },
        { name: "C#.NET", level: 3 },
        { name: "Knitting", level: 4 }
      ]
    };
  }
};
</script>

<style scoped>
#skill-container {
  width: 80%;
}

#skill-labels {
  display: grid;
  grid-template-columns: 25% 15% repeat(2, 1fr) 15%;
  font-size: calc(70% + 0.5vw);
}
#skill-labels:nth-child(1) {
  text-align: left;
}

#skill-labels:nth-child(2) {
  text-align: center;
}

#skill-labels:nth-child(3) {
  text-align: center;
}

#skill-labels:nth-child(4) {
  text-align: right;
}

#slider-container {
  display: grid;
  grid-template-columns: 25% auto;
  height: 5vh;
}

#slider-container label {
  white-space: nowrap;
}

input[type="range"] {
  -webkit-appearance: none;
  width: 100%;
  margin: 7.5px 0;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: var(--skills-quote);
}
input[type="range"]::-webkit-slider-thumb {
  border: 1px solid var(--skills-text);
  height: 18px;
  width: 10px;
  border-radius: 25px;
  background: var(--skills-title);
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7.5px;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: var(--skills-quote);
}
input[type="range"]::-moz-range-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: var(--skills-quote);
}
input[type="range"]::-moz-range-thumb {
  border: 1px solid var(--skills-text);
  height: 18px;
  width: 10px;
  border-radius: 25px;
  background: var(--skills-title);
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type="range"]::-ms-fill-lower {
  background: var(--skills-text);
}
input[type="range"]::-ms-fill-upper {
  background: var(--skills-text);
}
input[type="range"]::-ms-thumb {
  border: 1px solid var(--skills-text);
  height: 18px;
  width: 10px;
  border-radius: 25px;
  background: var(--skills-quote);
  cursor: pointer;
  height: 3px;
}
input[type="range"]:focus::-ms-fill-lower {
  background: var(--skills-quote);
}
input[type="range"]:focus::-ms-fill-upper {
  background: var(--skills-quote);
}
</style>
