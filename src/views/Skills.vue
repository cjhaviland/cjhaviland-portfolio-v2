<template>
    <BorderDiv
    :title="title"
    :quote="quote">
    <section id="skill-container">
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
        <label for="myRange">{{skill.name}}</label>
        <input type="range" 
          min="1" max="4" 
          :value=skill.level class="slider" id="myRange">
      </div>
    </section>
    </BorderDiv>
</template>

<script>
import BorderDiv from "@/components/BorderDiv.vue";
import Grid from "@/components/Grid.vue";

export default {
  components: {
    BorderDiv,
    Grid
  },
  data() {
    return {
      title: "Skills",
      quote: "Will said skills pay the bills?",
      skills: [
        {name:'HTML5, CSS3', level: 3},
        {name:'JavaScript', level: 2},
        {name:'Node.js', level: 2},
        {name:'React.js', level: 0},
        {name:'Vue.js', level: 0},
        {name:'SQL', level: 2},
        {name:'Python', level: 1},
        {name:'C#.NET', level: 2},
        {name:'Knitting', level: 3}
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
    font-size: .6rem;
  }
  #skill-labels #novice {
    text-align: left;
  }

  #skill-labels #intermediate {
    text-align: center;
  }

  #skill-labels #advanced {
    text-align: center;
  }

  #skill-labels #expert {
    text-align: right;
  }

  #slider-container {
    display: grid;
    grid-template-columns: 25% auto;
    height: 5vh;
  }

  label {
    font-size: .8rem;
  }

  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    margin: 7.5px 0;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #002200, 0px 0px 0px #003c00;
    background: #205928;
    border-radius: 0px;
    border: 0px solid #18d501;
  }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #00aa00, 0px 0px 0px #00c300;
    border: 1px solid #83e584;
    height: 18px;
    width: 10px;
    border-radius: 25px;
    background: #439643;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7.5px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #215d2a;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #002200, 0px 0px 0px #003c00;
    background: #205928;
    border-radius: 0px;
    border: 0px solid #18d501;
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #00aa00, 0px 0px 0px #00c300;
    border: 1px solid #83e584;
    height: 18px;
    width: 10px;
    border-radius: 25px;
    background: #439643;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #1f5526;
    border: 0px solid #18d501;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #002200, 0px 0px 0px #003c00;
  }
  input[type=range]::-ms-fill-upper {
    background: #205928;
    border: 0px solid #18d501;
    border-radius: 0px;
    box-shadow: 0px 0px 0px #002200, 0px 0px 0px #003c00;
  }
  input[type=range]::-ms-thumb {
    box-shadow: 0px 0px 0px #00aa00, 0px 0px 0px #00c300;
    border: 1px solid #83e584;
    height: 18px;
    width: 10px;
    border-radius: 25px;
    background: #439643;
    cursor: pointer;
    height: 3px;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #205928;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #215d2a;
  }

</style>
