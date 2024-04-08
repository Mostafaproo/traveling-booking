<template>
  <select v-model="selectedLang" @change="changeLang">
    <option
      v-for="locale in availableLocales"
      :key="locale.code"
      :value="locale.code"
    >
      {{ locale.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'LanguageSwitcher',
  data() {
    return {
      selectedLang: this.$i18n.locale,
      locales: [
        { code: 'ar', name: 'Ar' },
        { code: 'en', name: 'En' },
      ],
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(
        (i) => i.code !== this.$i18n.locale || 'ar'
      )
    },
  },
  methods: {
    changeLang() {
      this.$router
        .replace(this.switchLocalePath(this.selectedLang))
        .then(() => {
          location.reload()
        })
    },
  },
}
</script>

<style lang="scss" scoped>
select {
  background: transparent;
  border: 0;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
}
select option {
  color: #000;
  border: none;
  border-radius: 0.4rem;
  font-size: 14px;
  cursor: pointer;
}
</style>
