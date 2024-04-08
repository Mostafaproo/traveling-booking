<template>
  <nuxt-link :to="this.localePath('/')">
    <h1 class="logo">Traveling</h1>
  </nuxt-link>
</template>

<script>
export default {
  name: 'BaseLogo',
}
</script>
<style>
.logo {
  font-size: 3rem;
  color: #9f2064;
}
</style>
