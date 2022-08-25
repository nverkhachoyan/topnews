import { configureStore } from "@reduxjs/toolkit";
import breakingNewsReducer from "../features/BreakingNews/breakingNewsSlice";

const store = configureStore({
    reducer: {
        breakingNews: breakingNewsReducer
    }
})

export default store