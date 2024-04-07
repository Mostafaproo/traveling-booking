import header from './header'
export default () => {
  return {
    ...header,
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
