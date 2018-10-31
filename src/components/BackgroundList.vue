<template>
  <div>
    <dl
      v-for="item in backgroundList"
      :key="item.title"
      :descList="item.title" >
      <dd>{{ item.title }}:</dd>
      <dt>{{ item.content }}</dt>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'BackgroundList',
  data() {
    return {
      backgroundList: [
        { title: 'Location', content: 'Brewster, NY' },
        { title: 'Industry', content: 'Software' },
        { title: 'Current Position', content: 'Software Engineer' },
        { title: 'Bachelors', content: 'Information Systems' },
        { title: 'Coursework', content: 'Computer Science, Web Development' },
        {
          title: 'Certifications',
          content: 'MCP, MTA Development Fundamentals, C# Essential Training'
        }
      ]
    };
  }
};
</script>

<style scoped>
dl {
  display: flex;
}

dd {
  padding-right: 1vw;
  text-align: right;
  width: 50%;
}

dt {
  width: 50%;
  padding-left: 1vw;
  font-weight: bold;
}
</style>
