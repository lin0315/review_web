<template>
  <div>
    <h2>porfile页面</h2>
    <div>{{ $route.query.name }}</div>
    <div>{{ $route.query.age }}</div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
</style>