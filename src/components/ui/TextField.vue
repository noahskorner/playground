<template>
  <div class="inline-flex flex-col">
    <label for="" class="inline-block px-8">Email</label>
    <div id="input-wrapper" class="inline-block px-8">
      <input type="text" placeholder="Enter email" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#input-wrapper {
  height: 2.5rem;
  border-radius: 1.5rem;
  background-color: var(--gray-10);
}

input {
  width: 15rem;
  height: 100%;
  background-color: transparent;
  color: var(--gray-90);
}

input:focus {
  outline: 0 !important;
}
</style>