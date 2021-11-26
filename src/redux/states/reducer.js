import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'pokemon',
    initialState: {
        data: []
    },
    reducers: {
        setStoreData: (state, action) => {
            state.data = action.payload;
        }
    }
})

export default reducer;

export const { setStoreData } = actions;