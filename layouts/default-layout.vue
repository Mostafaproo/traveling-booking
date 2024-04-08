<template>
  <div class="default-layout">
    <Nuxt />
    <BaseLoader />
  </div>
</template>
<script>
import BaseLoader from '@/components/common/BaseLoader/index.vue'
export default {
  name: 'DefaultLayout',
  components: { BaseLoader },
  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale || 'ar',
      },
    }
  },
}
</script>
