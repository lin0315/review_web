<template>
  <div id="app">
    <div>--------app组件-----</div>
    <button @click="additionClick">+</button>
    <button @click="subtractClcik">+</button>
    <button @click="addcount(5)">+5</button>
    <button @click="addcount(10)">+10</button>
    <button @click="addstudent">添加学生</button>

    <div>------app组件--getters</div>
    <div>平方:{{ $store.getters.powerCount }}</div>
    <div>学生年龄大于50: {{ $store.getters.more50stu }}</div>
    <div>学生年龄大于50的人数: {{ $store.getters.more50stulength }}</div>
    <div>传递参数age>40:{{ $store.getters.moreAgeStu(40) }}</div>

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
    // 1普通提交风格
    // addcount(count) {
    //   this.$store.commit("incrementCount", count);
    // },

    // 2.特殊的提交风格
    addcount(count) {
      this.$store.commit({
        type: "incrementCount",
        count,
      });
    },
    addstudent() {
      const stu = { name: "孙七", age: 77 };
      this.$store.commit("addStudent", stu);
    },
  },
};
</script>

<style scoped>
</style>