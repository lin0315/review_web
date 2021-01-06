<template>
  <div>
    <h3>{{ $store.state.count }}</h3>
    <div>-----actions异步提交-----</div>
    <h3>{{ $store.state.info }}</h3>
    <button @click="updataInfo">修改</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    updataInfo() {
      this.$store.dispatch("aupdataInfo", "aaaaa").then((data) => {
        console.log(data);
      });
    },
  },
};
</script>

<style scoped>
</style>