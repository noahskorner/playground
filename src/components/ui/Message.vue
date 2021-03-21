<template>
  <div id="message" class="absolute w-full flex justify-start items-center p-4">
    <button id="close-button" class="absolute">
      <i class="fas fa-times"></i>
    </button>
    <div>Message</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#message {
  min-height: 5rem;
  max-width: 480px;
  border-radius: 0.5rem;
  background-color: #d7263d;
  color: white;
  bottom: 1rem;
  right: 1rem;
  box-shadow: 0 8px 28px 0 var(--shadow-2), 0 2px 4px 0 var(--shadow-1);
}

#close-button {
  top: 0.25rem;
  right: 0.75rem;
}
</style>