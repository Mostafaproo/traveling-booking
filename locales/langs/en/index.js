import header from './header'
export default () => {
  return {
    ...header,
    otherLang: "Arabic",
    lang: {
      char: "en",
      name: "En",
      dir: "ltr",
    },
    ar: "AR",
    en: "EN",
  }
}
