<template>
  <div>
    <div class="wrapper">
      <MenuNavigation />
      <TravelingForm />
    </div>
    <div class="container">
      <!--blog-heading--------------->
      <div class="blog-heading">
        <span>My Recent Posts</span>
        <h3>My Blog</h3>
      </div>
      <section id="blog">
        <Blog v-for="(blog, index) in limitedBlogs" :key="index" :blog="blog" />
      </section>
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
  computed: {
    limitedBlogs() {
      return this.Blogs.slice(0, 3)
    },
  },
  mounted() {
    this.fetchAllBlogs()
  },
  methods: {
    async fetchAllBlogs() {
      toggleLoaderStatus()
      try {
        const response = await this.$axios.$get(`/comments`)
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

<style lang="scss">
.wrapper {
  background: url('@/assets/images/banner/banner.jpg') no-repeat;
  background-size: cover;
  height: 100vh;
}
#blog {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.blog-heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  span {
    color: #f33c3c;
  }
  h3 {
    font-size: 2.4rem;
    color: #2b2b2b;
    font-weight: 600;
  }
}
</style>
