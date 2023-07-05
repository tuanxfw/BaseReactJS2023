import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    content: {
      title: "",
      message: "",
      type: "",
    },
  },
  reducers: {
    createNotification: (state, action) => {
      state.content = action.payload;
    },
  },
});

export default notificationSlice;

export const createNotification = notificationSlice.actions.createNotification;
