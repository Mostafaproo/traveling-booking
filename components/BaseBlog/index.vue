<template>
  <div class="container">
    {{ blog }}
  </div>
</template>

<script>
export default {
  name: 'BaseBlog',
  props: {
    blog: {
      type: Object,
      default: ()=> {},
    },
  },
}
</script>

<style lang="scss" scoped></style>
