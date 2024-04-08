import all from './all'
export default () => {
  return {
    ...all,
    otherLang: "English",
    lang: {
      char: 'ar',
      name: 'Ar',
      dir: 'rtl',
    },
    ar: 'AR',
    en: 'EN',
  }
}
