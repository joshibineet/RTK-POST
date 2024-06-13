
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    error: null,
    memberData: null,
};

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        addMemberStart(state) {
            state.isLoading = true;
            state.error = null;
            state.memberData = null;
        },
        addMemberSuccess(state, action) {
            state.isLoading = false;
            state.memberData = action.payload;
        },
        addMemberFailure(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { addMemberStart, addMemberSuccess, addMemberFailure } = memberSlice.actions;
export default memberSlice.reducer;
