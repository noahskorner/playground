<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
}
</style>
