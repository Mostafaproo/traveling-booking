<template>
  <div class="container">
    <nav class="navbar">
      <BaseLogo />
    </nav>
  </div>
</template>

<script>
import BaseLogo from '@/components/common/BaseLogo/index.vue'
export default {
  name: 'NavigationBar',
  components :{
    BaseLogo
  }
}
</script>

<style lang="scss">
.navbar {
  position: fixed;
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}

.navbar ul {
  float: right;
  margin-right: 20px;
}
.navbar ul li {
  list-style: none;
  margin: 0 8px;
  display: inline-block;
  line-height: 80px;
}
.navbar ul li a {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: white;
  padding: 6px 13px;
  text-decoration: none;
  transition: 0.4s;
}
.navbar ul li a.active,
.navbar ul li a:hover {
  background: #9f2064;
  border-radius: 2px;
}
</style>
