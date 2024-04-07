<template>
  <b-dropdown id="dropdown-1" :text="$t('lang.name')" class="m-md-2">
    <b-dropdown-item @click.prevent.stop="changeLang()">
      <span> en </span>
    </b-dropdown-item>
    <b-dropdown-item @click.prevent.stop="changeLang()">
      <span> ar </span>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      locales: [
        { code: 'ar', name: 'Ar' },
        { code: 'en', name: 'En' },
      ],
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    changeLang() {
      this.$router
        .replace(this.switchLocalePath(this.availableLocales[0].code))
        .then(() => {
          location.reload()
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
