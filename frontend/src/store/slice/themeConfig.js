// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit';

// ** ThemeConfig Import
import { themeConfig } from '../../configs/theme.config';

const initialState = {
  mode: themeConfig.mode,
  themeColor: themeConfig.themeColor,
  colorLevel: themeConfig.primaryColorLevel,
  lang: themeConfig.locale,
  root: themeConfig.root
};

export const themeConfigs = createSlice({
  name: 'themeConfigs',
  initialState: initialState,
  reducers: {
    ChangeMode: (state, action) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
      } else {
        state.mode = 'light';
      }
    },
    ChangeLang : (state, action) => {
        state.lang = action.payload
    }
  },
});

export const { ChangeMode, ChangeLang } = themeConfigs.actions;

export default themeConfigs.reducer;
