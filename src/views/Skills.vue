<template>
  <MainContainer
    :title="title"
    :quote="quote">
    <section
      id="skill-container"
      class="body-container">
      <SkillTrack
        v-for="track in skillTracks"
        :key="track.track"
        :track-header="track.track">
        <Skill
          v-for="skill in track.skills"
          :key="skill.id"
          :skill-name="skill"/>
      </SkillTrack>
    </section>
  </MainContainer>
</template>

<script>
import MainContainer from '@/components/MainContainer.vue';
import SkillTrack from '@/components/SkillTrack.vue';
import Skill from '@/components/Skill.vue';

export default {
  components: {
    MainContainer,
    SkillTrack,
    Skill
  },
  data() {
    return {
      title: 'Skills',
      quote: 'Will the skills pay the bills?',
      skillTracks: [
        {
          track: 'To Do',
          skills: ['Python']
        },
        {
          track: 'In Progress',
          skills: ['Node', 'Vue', 'React']
        },
        {
          track: 'Everyday Use',
          skills: ['C#.NET', 'JavaScript', 'SQL']
        },
        {
          track: 'Refine',
          skills: ['HTML5', 'CSS3', 'Knitting']
        }
      ]
    };
  }
};
</script>

<style lang="scss">
$background: #30c5ff;
$link-text: #1d1414;
$title: #5e6c9f;

@mixin headingBorder {
  border-bottom: 1px solid $link-text;
}

@mixin absCenter {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  margin: auto;
}

#skill-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2%;
  width: 100%;
}

.skill-track {
  display: grid;
  grid-gap: 3%;
  justify-items: center;
  grid-auto-rows: max-content;
  position: relative;

  h3 {
    @include headingBorder;
  }
}

.skill {
  border: 1px solid $link-text;
  box-shadow: 4px 3px 5px 0px rgba(0, 0, 0, 0.2);
  height: auto;
  width: 7vw;
  min-height: 100px;
  min-width: 100px;
  text-align: center;
  position: relative;

  h4 {
    @include absCenter;
  }
}
</style>
