<template>
  <div class="font-primary min-h-screen bg-light relative">
    <Header />
    <TextField />
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
}
button:focus {
  outline: 0 !important;
}
</style>
