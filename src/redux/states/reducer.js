import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'pokemon',
    initialState: {
        data: [],
        otraCosa: [],
    },
    reducers: {
        setStoreData: (state, action) => {
            state.data = action.payload;
        },
        setOtraCosa: (state, action) => {
            state.otraCosa = action.payload;
        }
    }
})

export default reducer;

export const { setStoreData, setOtraCosa } = actions;