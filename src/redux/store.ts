import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./slices/main";
import i18nSlice from "./slices/i18next";

export const store = configureStore({
  reducer: {
    main: mainSlice,
    i18n: i18nSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
