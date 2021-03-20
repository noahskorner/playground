<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue";

export default {
  components: {
    Navbar,
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
