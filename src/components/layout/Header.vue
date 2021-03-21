<template>
  <div id="nav" class="w-screen text-md">
    <div class="h-full flex justify-between items-center mx-4">
      <div class="flex flex-row justify-around items-center">
        <router-link to="/"
          ><div id="logo" class="bg-light-blue"></div
        ></router-link>
      </div>
      <div class="flex justify-around items-center">
        <IconButton
          ><template #icon><i class="fas fa-plus fa-lg"></i></template
        ></IconButton>
        <router-link to="/profile">
          <IconButton
            ><template #icon
              ><i class="fas fa-user fa-lg"></i></template></IconButton
        ></router-link>
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
}
</style>
