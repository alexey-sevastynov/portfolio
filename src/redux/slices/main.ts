import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialStateTypes = {
  brigthTheme: boolean;
  openPopupLanguage: boolean;
  openMenuMobile: boolean;
  showDream: boolean;
  nameSkill: string;
  linkAnimation: boolean;
  linkAnimationId: number | null;
};

const initialState: InitialStateTypes = {
  brigthTheme: false,
  openPopupLanguage: false,
  openMenuMobile: false,
  showDream: false,
  nameSkill: "",
  linkAnimation: false,
  linkAnimationId: null,
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
    setShowLinkAnimation: (state, action: PayloadAction<boolean>) => {
      state.linkAnimation = action.payload;
    },
    setShowLinkAnimationId: (state, action: PayloadAction<number | null>) => {
      state.linkAnimationId = action.payload;
    },
  },
});
export const {
  onBrigthTheme,
  onOpenPopupLanguage,
  onOpenMenuMobile,
  setShowDream,
  setNameSkill,
  setShowLinkAnimation,
  setShowLinkAnimationId,
} = mainSlice.actions;

export default mainSlice.reducer;
