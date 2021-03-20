<template>
  <div id="nav" class="w-screen text-md">
    <div class="h-full flex justify-between items-center mx-4">
      <div class="flex flex-row justify-around items-center">
        <router-link to="/"><div id="logo"></div></router-link>
      </div>
      <div class="flex justify-around items-center">
        <router-link to="/profile">Profile</router-link>
        <p>New Post</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#nav {
  height: 4rem;
}

#logo {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #3b82f6;
  opacity: 0.5;
}
</style>
