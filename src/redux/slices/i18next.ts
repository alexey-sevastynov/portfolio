import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import englishTranslate from "../i18n/en/translation.json";
import ukraineTranslate from "../i18n/ua/translation.json";
import russianTranslate from "../i18n/ru/translation.json";

import { defaultLang, supportedLangs } from "../i18n/config";

interface i18n {
  lang: string;
  supportedLangs: {};
  translations: any;
}

const initialState: i18n = {
  lang: defaultLang,
  supportedLangs: { ...supportedLangs },
  translations: {
    en: englishTranslate,
    ua: ukraineTranslate,
    ru: russianTranslate,
  },
};

const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});
export const { setLang } = i18nSlice.actions;

export const selectTranslations = (state: any) =>
  state.i18n.translations[state.i18n.lang];

export default i18nSlice.reducer;
