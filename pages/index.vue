<template>
  <div>
    <div class="wrapper">
      <!-- Navigation _____________________ -->
      <MenuNavigation />
      <!-- form booking _____________________ -->
      <TravelingForm />
    </div>
    <!-- Blogs _____________________ -->
    <div class="container">
      <!--blog-heading--------------->
      <div class="blog-heading">
        <span>{{ $t('recent_blogs') }}</span>
        <h3>{{ $t('blogs') }}</h3>
      </div>
      <section>
        <div class="row">
          <div
            v-for="(blog, index) in limitedBlogs"
            :key="index"
            class="col-md-4"
          >
            <Blog :blog="blog" />
          </div>
        </div>
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
.blog-heading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  span {
    color: #f33c3c;
    font-size: 1.4rem !important;
  }
  h3 {
    font-size: 2.4rem;
    color: #2b2b2b;
    font-weight: 700;
  }
}
</style>
