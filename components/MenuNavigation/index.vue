<template>
  <div class="container">
    <nav class="navbar">
      <BaseLogo />
      <LanguageSwitcher />
    </nav>
  </div>
</template>

<script>
import BaseLogo from '@/components/common/BaseLogo/index.vue'
import LanguageSwitcher from '@/components/common/LanguageSwitcher/index.vue'
export default {
  name: 'NavigationBar',
  components: {
    BaseLogo,
    LanguageSwitcher,
  },
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  height: 50px;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}
</style>
