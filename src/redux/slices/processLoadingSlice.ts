import { createSlice } from "@reduxjs/toolkit";

const processLoadingSlice = createSlice({
  name: "processLoading",
  initialState: {
    value: 0,
  },
  reducers: {
    openProcessLoading: (state) => {
      state.value = state.value + 1;
    },
    closeProcessLoading: (state) => {
      state.value = state.value - 1 < 0 ? 0 : state.value - 1;
    },
  },
});

export default processLoadingSlice;

export const openProcessLoading = processLoadingSlice.actions.openProcessLoading;
export const closeProcessLoading = processLoadingSlice.actions.closeProcessLoading;
