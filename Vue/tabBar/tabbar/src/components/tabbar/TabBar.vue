<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
};
</script>

<style scoped>
#tab-bar {
  position: fixed;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
}
</style>