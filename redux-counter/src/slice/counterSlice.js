import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        "INCREMENT":  state => {
            return {
                value: state.value + 1
            };
        },
        "DECREMENT": state => {
            return {
                value: state.value - 1
            }
        },
        "ADDFIVE": state => {
            return {
                value: state.value + 5
            }
        }
    }
})


export const { INCREMENT, DECREMENT, ADDFIVE} = counterSlice.actions;

export default counterSlice.reducer;