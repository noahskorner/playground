<template>
  <button class="flex justify-center items-center">
    <slot name="icon"></slot>
  </button>
</template>

<style scoped>
button {
  width: 2rem;
  height: 2rem;
  margin: 0 0.25rem;
  background-color: var(--gray-25);
  color: var(--gray-80);
  border-radius: 50%;
}

button:hover {
  background-color: var(--gray-30);
  color: var(--gray-90);
}

button:active {
  background-color: var(--light-blue);
  box-shadow: 0 0 2px 2px var(--light-blue);
}
</style>
