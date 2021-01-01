<template>
  <div id="app">
    <router-link to="/home" tag="button" replace>Home</router-link>
    <button @click="userClick">User</button>
    <router-link :to="'/about/' + mes" tag="button" replace>About</router-link>
    <router-link
      :to="{ path: '/profile', query: { name: 'zhangsan', age: 20 } }"
      >我的</router-link
    >
    <button @click="profileClick">我的2</button>
    <router-view></router-view>
    <div>{{ $route.params.mes }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mes: "zhnagsan",
    };
  },
  methods: {
    userClick() {
      // this.$router.push("/user");
      this.$router.replace("/user");
    },
    profileClick() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "lisi",
          age: "21",
        },
      });
    },
  },
};
</script>
<style>
</style>
