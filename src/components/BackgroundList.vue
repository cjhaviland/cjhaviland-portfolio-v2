<template>
  <div class="pa-4">
    <dl class="d-flex"
      v-for="item in backgroundList"
      :key="item.title"
      :descList="item.title" >
      <dd class="text-xs-right">{{ item.title }}:</dd>
      <dt>{{ item.content }}</dt>
    </dl>
  </div>
</template>

<script>
export default {
  name: "background-list",
  data() {
    return {
      backgroundList: [
        { title: "Location", content: "Brewster, NY" },
        { title: "Industry", content: "Software" },
        { title: "Current Position", content: "Software Engineer" },
        { title: "Bachelors", content: "Information Systems" },
        { title: "Coursework", content: "Computer Science, Web Development" },
        {
          title: "Certifications",
          content: "MCP, MTA Development Fundamentals, C# Essential Training"
        }
      ]
    };
  }
};
</script>

<style scoped>
dd {
  width: 50%;
  padding-right: 1vw;
}

dt {
  width: 50%;
  padding-left: 1vw;
  font-weight: bold;
}
</style>
