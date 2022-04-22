import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
  }

export const booksSlice = createSlice({
    name: 'booksReducer',
    initialState,
    reducers: {
        sortAlphabetically: (state) => {
            state.value = state.value.sort(function (a, b) {
                if (a.title < b.title) {
                    return -1;
                }

                if (a.title > b.title) {
                    return 1;
                }
                return 0;
            })
        },
        addBooks: (state, action) => {
            action.payload.map((item) => state.value.push(item))
            // state.value = action.payload
        } 
    }
})

export const { sortAlphabetically, addBooks } = booksSlice.actions

export default booksSlice.reducer