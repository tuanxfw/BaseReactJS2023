import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpen: false,
    },
    reducers: {
        toggleSidebar: (state, action) => {
            state.isOpen = action.payload;
        },
    },
});

export default sideBarSlice;

export const toggleSidebar = sideBarSlice.actions.toggleSidebar;
