<template>
  <div id="baseLoader" class="loading-page">
    <img src="@/assets/images/Ripple.gif" alt="spinner" />
  </div>
</template>

<script>
export default {
  name: "MainLoader",
};
</script>

<style scoped>
.loading-page {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
}
.loading-page-visable {
  display: block;
  z-index: 10000;
}
</style>
