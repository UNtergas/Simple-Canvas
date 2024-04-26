import { configureStore } from "@reduxjs/toolkit";
import strokes from "@/module/reducers/strokes";
import currentStroke from "@/module/reducers/currentStroke";
import currentMode from "@/module/reducers/currentMode";
export const store = configureStore({
    reducer: {
        strokes,
        currentStroke,
        currentMode,
    },
})

export type AppDispatch = typeof store.dispatch;