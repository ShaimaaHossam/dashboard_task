import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name: "page",
    initialState: { 
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            if(state.value <= 0)
                state.value = 0
            else
                state.value -= 1;
        }
    }
})

export const { increment, decrement } = pageSlice.actions
export default pageSlice.reducer


