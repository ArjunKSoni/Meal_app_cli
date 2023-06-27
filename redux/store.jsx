import { configureStore } from "@reduxjs/toolkit";
import favourites from "./favorite";

export const store = configureStore({
    reducer: {
        favMeals: favourites
    }
});