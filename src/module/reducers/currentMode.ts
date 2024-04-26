import { RootState, Mode } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: RootState["currentMode"] = {
    type: true,
};

const slice = createSlice({
    name: "currentMode",
    initialState,
    reducers: {
        setMode: (state, action: PayloadAction<Mode>) => {
            const { type } = action.payload;
            state.type = type;
        }
    }
})
export default slice.reducer;
export const { setMode } = slice.actions;
export const modeSelector = (state: RootState) => state.currentMode;