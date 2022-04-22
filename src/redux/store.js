import { configureStore } from '@reduxjs/toolkit'
import booksSlice from './booksReducer';

export const store = configureStore({
  reducer: {
    books: booksSlice
  },
})