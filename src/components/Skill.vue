<template>
  <div class="skill">
      <font-awesome-icon  :icon="thumbtack" transform="up-8 rotate-45"/>
      <h4>{{skillName}}</h4>
  </div>
</template>

<script>
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Skill",
  props: ["skillName"],
  data() {
    return {
      thumbtack: faThumbtack
    };
  }
};
</script>
