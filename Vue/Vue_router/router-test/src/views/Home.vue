<template>
  <div>
    <span>Hello</span>
    <div>我是Home组件</div>
    <router-link to="/home/news">新闻news</router-link>
    <router-link to="/home/messages">消息messages</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
</style>