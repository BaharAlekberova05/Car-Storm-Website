import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("themeMode") || "light",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", state.mode);
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      localStorage.setItem("themeMode", state.mode);
    },
  },
});

export const { toggleMode, setMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;
