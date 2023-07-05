import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isOpen: false,
    data: {
      openKeys: [],
      selectedKeys: [],
    },
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.isOpen = action.payload;
    },
    setSidebarData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export default sideBarSlice;

export const toggleSidebar = sideBarSlice.actions.toggleSidebar;
export const setSidebarData = sideBarSlice.actions.setSidebarData;
