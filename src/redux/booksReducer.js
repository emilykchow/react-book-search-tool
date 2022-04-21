import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    value: [],
  }

export const booksSlice = createSlice({
    name: 'booksReducer',
    initialState,
    reducers: {
        sortAlphabetically: (state) => {
            state.value = state.value.sort(function (a, b) {
                if (a.content < b.content) {
                    return -1;
                }

                if (a.content > b.content) {
                    return 1;
                }
                return 0;
            })
        }
    }
})

export const { sortAlphabetically } = booksSlice.actions

export default booksSlice.reducer