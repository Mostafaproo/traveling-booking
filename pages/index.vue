<template>
  <div class="wrapper">
    <MenuNavigation />
    <TravelingForm />
  </div>
</template>

<script>
import TravelingForm from '@/components/TravelingForm/index.vue'
import MenuNavigation from '@/components/MenuNavigation/index.vue'
export default {
  name: 'IndexPage',
  components: {
    TravelingForm,
    MenuNavigation,
  },
}
</script>

<style>
.wrapper {
  background: url('@/assets/images/banner/banner.jpg') no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>
