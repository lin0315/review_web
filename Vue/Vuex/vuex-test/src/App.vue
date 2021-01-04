<template>
  <div id="app">
    <button @click="additionClick">+</button>
    <button @click="subtractClcik">+</button>
    <div>-------Home组件-------</div>
    <Home></Home>
    <div>-------HelloVuex组件-------</div>
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
import Home from "./components/Home";
import HelloVuex from "./components/HelloVuex";
export default {
  name: "App",
  components: {
    Home,
    HelloVuex,
  },
  methods: {
    additionClick() {
      this.$store.commit("increment");
    },
    subtractClcik() {
      this.$store.commit("idecrement");
    },
  },
};
</script>

<style scoped>
</style>