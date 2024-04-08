import all from './all'
export default () => {
  return {
    ...all,
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
