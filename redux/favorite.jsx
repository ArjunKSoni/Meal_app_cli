import { createSlice } from "@reduxjs/toolkit";
const favoriteSLice = createSlice({
    name: "favourites",
    initialState: {
        ids: [],
    },
    reducers: {
        addfav: (state, action) => { state.ids.push(action.payload.id) },
        remonfav: (state, action) => { state.ids.splice(state.ids.indexOf(action.payload.id), 1) },
    }
})

export const addfav = favoriteSLice.actions.addfav;
export const removefav = favoriteSLice.actions.remonfav;
export default favoriteSLice.reducer;