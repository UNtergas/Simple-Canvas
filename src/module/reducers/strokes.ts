import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/types";


const initialState: RootState['stroke'] = [];

const stroke = createSlice({
    name: 'stroke',
    initialState,
    reducers: {},
})



export default stroke.reducer;