import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    adminLoggedIn: false,
};

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminLoggedIn: (state, action) => {
            state.adminLoggedIn = action.payload;
        },
    },
});

export const { setAdminLoggedIn } = adminSlice.actions;
export default adminSlice.reducer;

