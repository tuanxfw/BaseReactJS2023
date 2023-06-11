import { configureStore } from "@reduxjs/toolkit";

import sidebarSlice from "@redux/slices/sidebarSlice";
import processLoadingSlice from "@redux/slices/processLoadingSlice";
import notificationSlice from "@redux/slices/notificationSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    processLoading: processLoadingSlice.reducer,
    notification: notificationSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
