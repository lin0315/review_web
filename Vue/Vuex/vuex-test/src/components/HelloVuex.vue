<template>
  <div>
    <h3>{{ $store.state.count }}</h3>
    <h3>{{ $store.state.info }}</h3>
    <button @click="updataInfo">修改info</button>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  methods: {
    updataInfo() {
      this.$store.commit("updataInfo");
    },
  },
};
</script>

<style scoped>
</style>