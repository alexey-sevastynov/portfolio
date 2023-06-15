import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialStateTypes = {
  brigthTheme: boolean;
  openPopupLanguage: boolean;
  openMenuMobile: boolean;
  showDream: boolean;
  nameSkill: string;
};

const initialState: InitialStateTypes = {
  brigthTheme: false,
  openPopupLanguage: false,
  openMenuMobile: false,
  showDream: false,
  nameSkill: "",
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
    setShowDream: (state, action: PayloadAction<boolean>) => {
      state.showDream = action.payload;
    },
    setNameSkill: (state, action: PayloadAction<string>) => {
      state.nameSkill = action.payload;
    },
  },
});
export const {
  onBrigthTheme,
  onOpenPopupLanguage,
  onOpenMenuMobile,
  setShowDream,
  setNameSkill,
} = mainSlice.actions;

export default mainSlice.reducer;