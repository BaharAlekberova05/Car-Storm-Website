import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("themeMode");
  if (savedTheme) return savedTheme;
  return "light";
};

const initialState = {
  mode: getInitialTheme(),
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
