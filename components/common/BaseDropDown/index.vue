<template>
  <div class="nav-user">
    <div class="nav-dropdown nav-user">
      <b-dropdown
        id="dropdown-offset"
        toggle-class="text-decoration-none"
        class="nav-dropdown__dropdown"
        no-caret
      >
        <template #button-content>
          <div class="nav-dropdown__text-holder">
            <span class="title-upload"> {{ title }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
              ></path>
            </svg>
          </div>
        </template>
        <slot name="dropdownItems" />
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DropdownItems',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss">
.profile-img {
  width: 20px;
  height: 20px;
  border-radius: 100%;
}
.nav-dropdown {
  &__dropdown {
    .dropdown-menu {
      box-shadow: 0px 13px 39px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      max-width: 100%;
      width: 100%;
      padding: 0 30px;
      border: none !important;
      min-width: 100%;
      overflow: hidden;
    }
    // .dropdown-item {
    //   margin: 1rem 0;
    //   text-align: left;
    //   background-color: #fff;
    //   border-radius: 10px;
    //   a {
    //     color: #000;
    //     font-size: 1.3rem;
    //     i {
    //       font-size: 1.7rem;
    //     }
    //   }
    // }
  }
  // .dropdown-toggle {
  //   background-color: transparent !important;
  //   color: inherit !important;
  //   border: 0 !important;
  //   box-shadow: none !important;

  //   &:focus {
  //     outline: none !important;
  //   }
  // }
  &__text-holder {
    font-size: 1.8rem;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    span {
      margin: 0 0.7rem;
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
}

.title-upload {
  margin: 0 5px;
}
// html:lang(ar) {
//   .dropdown-item {
//     text-align: right;
//   }
// }
// .custom-control:focus {
//   outline: none !important;
// }
</style>
