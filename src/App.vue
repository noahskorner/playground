<template>
  <div class="font-primary min-h-screen relative">
    <link rel="stylesheet" :href="state.theme">
    <Header @changeTheme="state.changeTheme" />
    <TextField />
    <transition name="slide-left" mode="out-in">
      <Message v-show="state.showMessage" />
    </transition>
    <button @click="state.showMessage = !state.showMessage">
      toggle message
    </button>
    <router-view></router-view>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6"
    >
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import { reactive } from "vue";
import "./assets/css/light-theme.css";

export default {
  components: {
    Header,
  },

  setup() {
    const state = reactive({
      showMessage: false,
      theme: "./assets/css/dark-theme.css",
      changeTheme: (theme) => {
        state.theme = theme == 'light' ? "./assets/css/light-theme.css" : "./assets/css/dark-theme.css"
      },
    });

    state.changeTheme(state.theme);

    return {
      state,
    };
  },
};
</script>

<style>
html,
body {
  overflow-x: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button:focus {
  outline: 0 !important;
}
</style>
