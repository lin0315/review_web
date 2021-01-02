<template>
  <div id="app">
    <MainTabBar></MainTabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "./components/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import url(./assets/css/base.css);
</style>
