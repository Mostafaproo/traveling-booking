<template>
  <div>
    <div class="wrapper">
      <MenuNavigation />
      <TravelingForm />
    </div>
    <div class="position-relative">
      <Blog v-for="(blog,index) in Blogs" :key="index" :blog="blog" />
    </div>
  </div>
</template>

<script>
import { toggleLoaderStatus } from '../helper/toggleLoader.js'
import TravelingForm from '@/components/TravelingForm/index.vue'
import MenuNavigation from '@/components/MenuNavigation/index.vue'
import Blog from '@/components/BaseBlog/index.vue'
export default {
  name: 'IndexPage',
  components: {
    TravelingForm,
    MenuNavigation,
    Blog,
  },
  layout: 'default-layout',
  data() {
    return {
      Blogs: [],
    }
  },
  mounted() {
    this.fetchAllBlogs()
  },
  methods: {
    async fetchAllBlogs() {
      toggleLoaderStatus()
      try {
        const response = await this.$axios.$get(`/posts`)
        this.Blogs = response
        toggleLoaderStatus()
      } catch (error) {
        console.log(error)
        toggleLoaderStatus()
      }
    },
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
