import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk<ProjectsTypes[]>(
  "projects/fetchProjects",
  async () => {
    const { data } = await axios.get(
      "https://backend-portfolio-ten.vercel.app/items"
    );
    return data;
  }
);

export const fetchGetOneView = createAsyncThunk<
  ProjectsTypes[],
  FetchGetOneViewArgs
>("oneView/fetchGetOneView", async (params) => {
  const { id } = params;

  const { data } = await axios.get(
    `https://backend-portfolio-ten.vercel.app/items/${id}`
  );
  return data;
});

export const fetchGetOneStar = createAsyncThunk<
  ProjectsTypes[],
  FetchGetOneViewArgs
>("oneStar/fetchGetOneStar", async (params) => {
  const { id } = params;

  const { data } = await axios.get(
    `https://backend-portfolio-ten.vercel.app/items/star/${id}`
  );
  return data;
});
type FetchGetOneViewArgs = {
  id: string;
};

export type ProjectsTypes = {
  viewsCount: number;
  likeCount: number;
  _id: string;
  title: string;
  text_ua: string;
  text_en: string;
  text_ru: string;
  languageProgram: string;
  link: string;
  star?: boolean;
};

type InitialStateTypes = {
  brigthTheme: boolean;
  openPopupLanguage: boolean;
  openMenuMobile: boolean;
  showDream: boolean;
  nameSkill: string;
  linkAnimation: boolean;
  linkAnimationId: number | null;
  projects: ProjectsTypes[];
  project: any;
  status: string;
  star_1: boolean;
  star_2: boolean;
  star_3: boolean;
  star_4: boolean;
  star_5: boolean;
  star_6: boolean;
};

const initialState: InitialStateTypes = {
  brigthTheme: false,
  openPopupLanguage: false,
  openMenuMobile: false,
  showDream: false,
  nameSkill: "",
  linkAnimation: false,
  linkAnimationId: null,
  projects: [],
  project: null,
  status: "",
  star_1: false,
  star_2: false,
  star_3: false,
  star_4: false,
  star_5: false,
  star_6: false,
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
    setTrueStar_1: (state) => {
      state.star_1 = true;
    },
    setTrueStar_2: (state) => {
      state.star_2 = true;
    },
    setTrueStar_3: (state) => {
      state.star_3 = true;
    },
    setTrueStar_4: (state) => {
      state.star_4 = true;
    },
    setTrueStar_5: (state) => {
      state.star_5 = true;
    },
    setTrueStar_6: (state) => {
      state.star_6 = true;
    },

    setActiveStar: (state) => {
      const id = state.project._id;

      const newArrayProjects = state.projects.map((project) => {
        if (project._id === id) {
          return { ...project, star: true };
        } else {
          return { ...project };
        }
      });

      state.projects = newArrayProjects;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(fetchProjects.pending, (state) => {
    //   state.projects = [];
    //   state.status = "loading";
    // });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchProjects.rejected, (state) => {
      state.projects = [];
      state.status = "error";
    });

    builder.addCase(fetchGetOneView.fulfilled, (state, action) => {
      state.project = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchGetOneView.rejected, (state) => {
      state.project = [];
      state.status = "error";
    });

    builder.addCase(fetchGetOneStar.fulfilled, (state, action) => {
      state.project = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchGetOneStar.rejected, (state) => {
      state.project = [];
      state.status = "error";
    });
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
  setActiveStar,
  setTrueStar_1,
  setTrueStar_2,
  setTrueStar_3,
  setTrueStar_4,
  setTrueStar_5,
  setTrueStar_6,
} = mainSlice.actions;

export default mainSlice.reducer;
