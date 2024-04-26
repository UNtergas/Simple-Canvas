import { RootState, Point } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: RootState["currentStroke"] = {
    points: [],
    color: "#000",
};

const slice = createSlice({
    name: 'currentStroke',
    initialState,
    reducers: {
        beginStroke: (state, action: PayloadAction<Point>) => {
            state.points = [action.payload];
        },
        updateStroke: (state, action: PayloadAction<Point>) => {
            state.points.push(action.payload);
        },
        setStrokeColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload;
        },
        endStroke: (state) => {
            state.points = [];
        }
    }
})

export default slice.reducer;

export const { beginStroke, updateStroke, setStrokeColor, endStroke } = slice.actions;
export const currentStrokeSelector = (state: RootState) => state.currentStroke;