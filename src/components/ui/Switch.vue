<template>
  <label class="switch">
    <i class="fas fa-cloud-moon fa-lg"></i>
    <input type="checkbox" />
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {};
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 3.5rem;
  height: 2rem;
  margin: 0 0.25rem;
}
/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 2rem;
  width: 2rem;
  left: -1px;
  bottom: 0;
  background-color: var(--gray-00);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #2196f3;
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(83%);
  -ms-transform: translateX(83%);
  transform: translateX(83%);
}
/* Rounded sliders */
.slider.round {
  border-radius: 1rem;
}
.slider.round:before {
  border-radius: 50%;
}
</style>