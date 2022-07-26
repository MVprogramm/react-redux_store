export const SET = "LANGUAGE/SET";

export const setLanguage = (lang) => {
  return {
    type: SET,
    payload: lang
  }
}