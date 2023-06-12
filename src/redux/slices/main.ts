import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialStateTypes = {
  brigthTheme: boolean;
  openPopupLanguage: boolean;
  openMenuMobile: boolean;
};

const initialState: InitialStateTypes = {
  brigthTheme: false,
  openPopupLanguage: false,
  openMenuMobile: false,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    onBrigthTheme: (state) => {
      const toggle = (input: boolean) => !input;
      state.brigthTheme = toggle(state.brigthTheme);
    },
    onOpenPopupLanguage: (state) => {
      const toggle = (input: boolean) => !input;
      state.openPopupLanguage = toggle(state.openPopupLanguage);
    },
    onOpenMenuMobile: (state) => {
      const toggle = (input: boolean) => !input;
      state.openMenuMobile = toggle(state.openMenuMobile);
    },
  },
});
export const { onBrigthTheme, onOpenPopupLanguage, onOpenMenuMobile } =
  mainSlice.actions;

export default mainSlice.reducer;
