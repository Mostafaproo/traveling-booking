<template>
  <div class="blog-container">
    <div class="blog-box">
      <div class="blog-box__blog-img">
        <!-- <img alt="blog" src="images/blog-1.jpeg" /> -->
      </div>
      <div class="blog-box__blog-text">
        <span class="blog-box__date">18 July 2021 / Web Design</span>
        <a href="#" class="blog-box__blog-title"
          >{{ blog.name }}</a
        >
        <p class="blog-box__text">
          {{ blog.body }}
        </p>
        <a class="blog-box__read-more" href="#">Read More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseBlog',
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
/*--blog--------------------------*/

.blog-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0px;
  flex-wrap: wrap;
}

.blog-box {
  width: 350px;
  background-color: #ffffff;
  border: 1px solid #ececec;
  margin: 20px 20px;

  &__blog-img {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__blog-text {
    padding: 30px;
    display: flex;
    flex-direction: column;
    p {
      color: #9b9b9b;
      font-size: 1.4rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 20px 0px;
    }
    a {
      color: #0f0f0f;
      &:hover {
        color: #c74242;
        transition: all ease 0.3s;
      }
    }
  }
  &__date {
    color: #eb1085;
    font-size: 1.2rem;
  }
  &__blog-title {
    font-size: 1.7rem;
    font-weight: 500;
    color: #272727;
  }
}
@media (max-width: 1250px) {
  .blog-box {
    width: 300px;
  }
}
@media (max-width: 1100px) {
  .blog-box {
    width: 70%;
  }
}

@media (max-width: 550px) {
  .blog-box {
    margin: 20px 10px;
    width: 100%;
  }
  #blog {
    padding: 20px;
  }
}
</style>
